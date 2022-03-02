import { RefreshIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Title } from 'components'
import { Cookies as CookiesUtils } from 'utils'
import { useMemo } from 'react'
import { useIsFetching as useIsFetchingQuery } from 'react-query'

type HeaderProps = {
  cookies?: typeof CookiesUtils
  useIsFetching?: typeof useIsFetchingQuery
}

export const Header = ({
  cookies = CookiesUtils,
  useIsFetching = useIsFetchingQuery
}: HeaderProps) => {
  const allCookies = cookies.getAll()
  const isAuthenticated = useMemo(
    () => Boolean(allCookies['authorization']),
    [allCookies]
  )

  const isFetching = useIsFetching()

  return (
    <div className="mt-8 p-4 flex justify-between items-center sm:flex-row flex-col">
      <div className="flex items-center flex-col sm:flex-row">
        <Title>Randomfy</Title>
        {!!isFetching && (
          <RefreshIcon
            data-testid="refeching"
            className="ml-4 animate-spin h-10 w-10 sm:h-9 sm:w-9   
          dark:text-neutral-200"
          />
        )}
      </div>

      <header className="flex flex-col">
        <nav className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
          <Link href="/">Home</Link>
        </nav>
        <nav className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
          <Link href="/about">About</Link>
        </nav>
        {isAuthenticated && (
          <nav className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
            <Link href="/logout">Log out</Link>
          </nav>
        )}
      </header>
    </div>
  )
}
