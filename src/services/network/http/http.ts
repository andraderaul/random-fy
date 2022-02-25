import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import { NextPageContext } from 'next'
import { Cookies } from 'utils'

const baseURL = process.env.BACKEND_API || 'http://localhost:3000/api'

type CustomHeader = string | number | boolean

type SetCustomHeader = {
  key: string
  value: CustomHeader
}

type GetCustomHeader = {
  key: string
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

const httpInstance = axios.create({
  baseURL
})

/* */

httpInstance.interceptors.request.use(requestInterceptor)

export const setCustomHeader = ({ key, value }: SetCustomHeader) => {
  httpInstance.defaults.headers.common[key] = value
}

export const getCustomHeader = ({ key }: GetCustomHeader) =>
  httpInstance.defaults.headers.common[key]

export function http<T>(config: CustomAxiosRequestConfig) {
  return httpInstance(config) as AxiosPromise<T>
}
