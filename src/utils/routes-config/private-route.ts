import { GetServerSidePropsContext } from 'next'
import { Cookies } from '../cookies'

export async function protectedRoutes(context: GetServerSidePropsContext) {
  const cookies = Cookies.getAll({ ctx: context })
  const auth = cookies['authorization'] ?? null

  if (!auth) {
    context.res.writeHead(302, {
      Location: `/?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return auth
}
