import { playlistMock, artistMock, artistsMock } from 'mock'
import { rest } from 'msw'
import { Artist, Recommendation } from 'types'

import { composeEndpoint } from '../utils'

export const playlistHandlers = [
  rest.post(composeEndpoint('/playlist'), (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(playlistMock))
  })
]

export const randomArtistHandlers = [
  rest.get<Artist>(composeEndpoint('/random-top-artist'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(artistMock))
  })
]

export const recommendationsHandlers = [
  rest.get<Array<Recommendation>>(
    composeEndpoint('/recommendations'),
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(artistsMock))
    }
  )
]
