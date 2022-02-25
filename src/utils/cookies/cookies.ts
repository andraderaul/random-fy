import {
  NextPageContext,
  GetServerSidePropsContext,
  NextApiResponse
} from 'next'

import nookies, { parseCookies, setCookie } from 'nookies'

type SetCookie = {
  name: string
  value: string
  options?: {
    ctx?: NextPageContext | GetServerSidePropsContext
    res?: NextApiResponse
    [key: string]: unknown
  }
}

type GetAllCookie = {
  ctx?: NextPageContext | GetServerSidePropsContext
}

const getOptions = () => {
  const secure = process.env.NODE_ENV === 'production'
  return { secure }
}

function getAll(options: GetAllCookie = {}) {
  const { ctx } = options

  if (ctx !== undefined) {
    return nookies.get(ctx)
  }

  return parseCookies()
}

function set({ name, value, options = {} }: SetCookie) {
  const { ctx, res, ...rest } = options

  const defaultOptions = getOptions()

  if (ctx !== undefined) {
    nookies.set(ctx, name, value, {
      ...defaultOptions,
      ...rest
    })
    return
  }

  setCookie({ res }, name, value, { ...defaultOptions, ...rest })
  return
}

export const Cookies = {
  getAll,
  set
}
