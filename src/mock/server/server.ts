import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  playlistHandlers,
  randomArtistHandlers,
  recommendationsHandlers,
  relatedHandlers
} from './handlers'

const handlers = [
  ...playlistHandlers,
  ...randomArtistHandlers,
  ...recommendationsHandlers,
  ...relatedHandlers
]

const server = setupServer(...handlers)

export { rest, server }
