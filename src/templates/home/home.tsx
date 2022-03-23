import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content } from 'components'
import Link from 'next/link'

export const Home = () => {
  return (
    <Content>
      <DynamicHeader />

      <div className="p-10 flex justify-around flex-wrap">
        <Link href="/find">
          <a
            className="
              m-2
              w-72 p-6 border-2

              dark:border-orange-50 
              hover:dark:border-orange-400
              rounded-lg 
              
              dark:bg-orange-50
              hover:dark:bg-orange-100

              hover:no-underline
              dark:text-orange-600 font-semibold
              text-center
              
              transition-all duration-700"
          >
            I want to meet a new artists
          </a>
        </Link>

        <Link href="/find">
          <a
            className="
            m-2
           
            w-72 p-6 border-2

            dark:border-orange-50 
            hover:dark:border-orange-400
            rounded-lg 
            
            dark:bg-orange-50
            hover:dark:bg-orange-100

            hover:no-underline
            dark:text-orange-600 font-semibold
            text-center
            
            transition-all duration-700"
          >
            I want to search artist by name
          </a>
        </Link>
      </div>
    </Content>
  )
}
