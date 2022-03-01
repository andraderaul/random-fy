import {
  NextPageContext,
  GetServerSidePropsContext,
  NextApiResponse
} from 'next'

import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies'

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

type DestroyCookie = {
  name: string
  options?: {
    ctx?: NextPageContext | GetServerSidePropsContext
    res?: NextApiResponse
    [key: string]: unknown
  }
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

function destroy({ name, options = {} }: DestroyCookie) {
  const { ctx, res, ...rest } = options
  if (ctx !== undefined) {
    nookies.destroy(ctx, name, rest)
  }

  destroyCookie({ res }, name, rest)
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
  set,
  destroy
}
