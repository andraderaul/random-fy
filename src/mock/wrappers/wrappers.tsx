import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'

const queryClientMock = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

type PropsWithChildren = {
  children: React.ReactNode
}

export const wrapperReactQuery = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClientMock}>{children}</QueryClientProvider>
)

/**
 *
 * @see https://github.com/tannerlinsley/react-query/blob/ead2e5dd5237f3d004b66316b5f36af718286d2d/src/react/tests/utils.tsx#L6-L17
 *
 * */
export function renderWithClient(
  ui: React.ReactElement,
  client: QueryClient = queryClientMock
) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      )
  }
}
