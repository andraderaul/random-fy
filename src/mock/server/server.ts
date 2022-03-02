import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  playlistHandlers,
  randomArtistHandlers,
  recommendationsHandlers
} from './handlers'

const handlers = [
  ...playlistHandlers,
  ...randomArtistHandlers,
  ...recommendationsHandlers
]

const server = setupServer(...handlers)

export { rest, server }
