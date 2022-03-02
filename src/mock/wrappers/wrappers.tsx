import { QueryClient, QueryClientProvider } from 'react-query'

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
