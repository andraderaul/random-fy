import Link from 'next/link'
import { useTranslation } from 'next-i18next'
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
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </nav>
)

export type HeaderProps = {
  cookies?: typeof CookiesUtils
}

export const Header = ({ cookies = CookiesUtils }: HeaderProps) => {
  const { t } = useTranslation('common')

  const allCookies = cookies.getAll()
  const isAuthenticated = useMemo(
    () => Boolean(allCookies['authorization']),
    [allCookies]
  )

  return (
    <div className="mt-2 p-4 flex justify-between items-center sm:flex-row flex-col">
      <div className="flex items-center flex-col sm:flex-row">
        <Link href="/">
          <a>
            <Title>Randomfy</Title>
          </a>
        </Link>
      </div>

      <header className="mt-4 sm:mt-0 flex sm:flex-col flex-row justify-between">
        <NavLink label={t('about')} href="/about" />
        {isAuthenticated && (
          <>
            <NavLink label={t('search')} href="/search" />
            <NavLink label={t('logout')} href="/logout" />
          </>
        )}
      </header>
    </div>
  )
}
