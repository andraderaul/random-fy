import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { NextPageContext } from 'next'
import { Cookies, getLocale } from 'utils'
import { refreshTokenService } from './refresh-token-service'

const baseURL = process.env.NEXT_PUBLIC_API || '/api'

type CustomHeader = string | number | boolean

type SetCustomHeader = {
  key: string
  value: CustomHeader
}

type CustomConfig = InternalAxiosRequestConfig & {
  isRetry: boolean
}

type CustomAxiosError = AxiosError & {
  config: CustomConfig
}

type CustomAxiosRequestConfig = AxiosRequestConfig & {
  ctx?: Partial<NextPageContext>
}

const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookies = Cookies.getAll()

    if (cookies['authorization']) {
      config.headers.setAuthorization(cookies['authorization'])
    }

    return config
  } catch (err) {
    return Promise.reject(err)
  }
}

function responseSuccessInterceptor(response: AxiosResponse) {
  return response
}

async function responseErrorInterceptor(error: CustomAxiosError) {
  try {
    const originalRequest = error.config
    const cookies = Cookies.getAll()
    const userIsUnauthenticated = error.response?.status === 401
    const refreshToken = cookies['refreshToken'] ?? null
    const accessToken = cookies['authorization'] ?? null
    const shouldRefreshToken =
      refreshToken &&
      accessToken &&
      userIsUnauthenticated &&
      !originalRequest.isRetry

    if (shouldRefreshToken) {
      originalRequest.isRetry = true
      const refreshResponse = await refreshTokenService(
        accessToken,
        refreshToken
      )

      if (refreshResponse.status === 200 && refreshResponse.data.accessToken) {
        setCustomHeader({
          key: 'authorization',
          value: refreshResponse.data.accessToken
        })
      }
    }
  } catch (err) {
    return Promise.reject(error)
  }

  return Promise.reject(error)
}

const httpInstance = axios.create({
  headers: {
    'x-origin-id': getLocale()
  },
  baseURL
})

httpInstance.interceptors.request.use(requestInterceptor)
httpInstance.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
)

export const setCustomHeader = ({ key, value }: SetCustomHeader) => {
  httpInstance.defaults.headers.common[key] = value
}

export function http<T>(config: CustomAxiosRequestConfig) {
  return httpInstance(config) as AxiosPromise<T>
}
