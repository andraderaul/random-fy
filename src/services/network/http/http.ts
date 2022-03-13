import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { NextPageContext } from 'next'
import { Cookies } from 'utils'

const baseURL = process.env.NEXT_PUBLIC_API || '/api'

type CustomHeader = string | number | boolean

type SetCustomHeader = {
  key: string
  value: CustomHeader
}

type CustomAxiosRequestConfig = AxiosRequestConfig & {
  ctx?: Partial<NextPageContext>
}

const requestInterceptor = async (config: CustomAxiosRequestConfig) => {
  try {
    const cookies = Cookies.getAll()

    // TODO: Refresh token
    if (cookies['authorization']) {
      config.headers = {
        ...config.headers,
        authorization: cookies['authorization']
      }
    }

    return config
  } catch (err) {
    return Promise.reject(err)
  }
}

function responseSuccessInterceptor(response: AxiosResponse) {
  return response
}
function responseErrorInterceptor(error: AxiosError) {
  if (error.response?.status === 401) {
    console.error('authorization error')
    console.error(error.response.data)
  }

  return Promise.reject(error)
}

const httpInstance = axios.create({
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
