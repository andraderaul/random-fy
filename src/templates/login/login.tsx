import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Content, SubTitle, PrimaryText, Header, Footer } from 'components'
import Link from 'next/link'

export const Login = () => {
  const { t } = useTranslation('login')

  return (
    <>
      <Content>
        <Header />
        <div className="p-4 mt-2 sm:mt-10 mb-0 mx-auto sm:w-4/5 w-full">
          <SubTitle>{t('title')}</SubTitle>
          <SubTitle>{t('subtitle')}</SubTitle>
          <div className="mt-8">
            <PrimaryText>{t('description')}</PrimaryText>
          </div>
        </div>
        <div className="p-4 mt-2 sm:mt-10">
          <div className="flex justify-center">
            <Link
              href="/api/login"
              className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
              text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
              aria-label="login button"
            >
              <Image
                alt="spotify icon"
                src="/img/Spotify_Icon_RGB_Green.png"
                width="30"
                height="30"
              />
              {t('button')}
            </Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  )
}
