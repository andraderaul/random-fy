import Link from 'next/link'
import { Title } from 'components'

export const Header = () => {
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
        <nav className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
          <Link href="/logout">Log out</Link>
        </nav>
      </header>
    </div>
  )
}
