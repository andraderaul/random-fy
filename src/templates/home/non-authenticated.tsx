import { Title, Content } from 'components'
import Link from 'next/link'

export const NonAuthenticated = () => {
  return (
    <Content>
      <div className="p-4">
        <Title>Randomfy</Title>
      </div>
      <div className="p-4">
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
    </Content>
  )
}
