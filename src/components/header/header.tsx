import Link from 'next/link'
import { Title } from 'components'
import { Cookies as CookiesUtils } from 'utils'
import { useMemo } from 'react'

type HeaderProps = {
  cookies?: typeof CookiesUtils
}

export const Header = ({ cookies = CookiesUtils }: HeaderProps) => {
  const allCookies = cookies.getAll()
  const isAuthenticated = useMemo(
    () => Boolean(allCookies['authorization']),
    [allCookies]
  )

  return (
    <div className="mt-8 p-4 flex justify-between items-center sm:flex-row flex-col">
      <Title>Randomfy</Title>

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
