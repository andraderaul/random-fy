import Image from 'next/image'
import { Content, SubTitle, PrimaryText, Header } from 'components'
import Link from 'next/link'

export const NonAuthenticated = () => {
  return (
    <Content>
      <Header />
      <div className="p-4 mt-8 mb-0 mx-auto sm:w-4/5 w-full">
        <SubTitle>Yeah.</SubTitle>
        <SubTitle>Hello music lover!</SubTitle>
        <div className="mt-8">
          <PrimaryText>
            Are you ready to meet new Spotify artists and create a playlist with
            them?
          </PrimaryText>
        </div>
      </div>
      <div className="p-4 mt-10">
        <div className="flex justify-center">
          <Link href="/api/login">
            <a
              className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
              text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
              aria-label="login button"
            >
              <Image
                alt="spotify icon"
                src="/img/Spotify_Icon_RGB_Black.png"
                width="30"
                height="30"
              />
              Login with spotify
            </a>
          </Link>
        </div>
      </div>
    </Content>
  )
}
