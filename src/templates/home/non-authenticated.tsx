import { Title } from 'components/title/title'
import Link from 'next/link'

export const NonAuthenticated = () => {
  return (
    <div className="bg-neutral-50 max-w-6xl my-0 mx-auto min-h-screen">
      <div className="p-4">
        <Title>Randomfy</Title>
        <div className="flex justify-center">
          <Link href="/api/login">
            <a
              className="w-20 text-slate-50 rounded-full 
                text-center bg-gray-800 p-1"
            >
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
