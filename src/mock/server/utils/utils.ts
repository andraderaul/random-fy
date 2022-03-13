import { server, rest } from '../server'
import { BASE_URL } from '../../../constants'

export const composeEndpoint = (endpoint: string) => `${BASE_URL}${endpoint}`

export const composeEndpointWithId = (endpoint: string) =>
  composeEndpoint(`${endpoint}/:id`)

type HttpMethod = 'get' | 'post' | 'delete' | 'put' | 'patch'

const responseError = {
  error: 'Invalid data'
}

export const forceRequestError = ({
  method = 'get',
  status = 400
}: {
  method: HttpMethod
  status?: number
}) => {
  server.use(
    rest?.[method]('*', (_req, res, ctx) => {
      return res(ctx.status(status), ctx.json(responseError))
    })
  )
}
