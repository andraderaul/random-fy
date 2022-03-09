import '@testing-library/jest-dom'
import { setLogger } from 'react-query'
import { server } from '../src/mock'

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null
})

// Enable API mocking before tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error'
  })
)

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

beforeEach(() => {
  window.HTMLMediaElement.prototype.play = jest.fn()
  window.HTMLMediaElement.prototype.pause = jest.fn()
})
