import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  playlistHandlers,
  randomArtistHandlers,
  recommendationsHandlers,
  relatedHandlers,
  refreshTokenHandlers
} from './handlers'

const handlers = [
  ...playlistHandlers,
  ...randomArtistHandlers,
  ...recommendationsHandlers,
  ...relatedHandlers,
  ...refreshTokenHandlers
]

const server = setupServer(...handlers)

export { rest, server }
