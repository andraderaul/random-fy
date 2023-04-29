import Link from 'next/link'
import { Title } from 'components'
import { Cookies as CookiesUtils } from 'utils'
import { useMemo } from 'react'

type NavLinkProps = {
  href: string
  label: string
}
const NavLink = ({ href, label }: NavLinkProps) => (
  <nav
    className="p-1 sm:p-0 text-2xl font-thin 
dark:text-gray-300 text-gray-700 leading-10 tracking-wide
hover:text-blue-500 hover:dark:text-orange-400"
  >
    <Link href={href}>{label}</Link>
  </nav>
)

export type HeaderProps = {
  cookies?: typeof CookiesUtils
}

export const Header = ({ cookies = CookiesUtils }: HeaderProps) => {
  const allCookies = cookies.getAll()
  const isAuthenticated = useMemo(
    () => Boolean(allCookies['authorization']),
    [allCookies]
  )

  return (
    <div className="mt-2 p-4 flex justify-between items-center sm:flex-row flex-col">
      <div className="flex items-center flex-col sm:flex-row">
        <Link href="/">
          <Title>Randomfy</Title>
        </Link>
      </div>

      <header className="mt-4 sm:mt-0 flex sm:flex-col flex-row justify-between">
        <NavLink label="About" href="/about" />
        {isAuthenticated && (
          <>
            <NavLink label="Search" href="/search" />
            <NavLink label="Log out" href="/logout" />
          </>
        )}
      </header>
    </div>
  )
}
