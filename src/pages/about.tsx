import dynamic from 'next/dynamic'
import { Content, Footer, PrimaryText, SubTitle } from 'components'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

const About = () => {
  const { t } = useTranslation('about')
  return (
    <>
      <Content>
        <DynamicHeader />
        <div className="p-4 mt-8 mb-0 mx-auto sm:w-4/5 w-full">
          <SubTitle>{t('title')}</SubTitle>
          <section className="mt-8">
            <PrimaryText>{t('subtitle')}</PrimaryText>
            <div className="mt-6">
              <PrimaryText>{t('disclaimer')}</PrimaryText>
            </div>
            <div className="mt-6">
              <PrimaryText>{t('ready')}</PrimaryText>
            </div>
          </section>
          <section className="mt-12">
            <SubTitle>{t('howItWorks.title')}</SubTitle>
            <div className="mt-8">
              <PrimaryText>{t('howItWorks.p1')}</PrimaryText>
            </div>
            <div className="mt-8">
              <PrimaryText>{t('howItWorks.p2')}</PrimaryText>
            </div>
          </section>

          <section className="mt-12">
            <SubTitle>Developer</SubTitle>
            <div className="mt-6">
              <PrimaryText>Raul Andrade</PrimaryText>
            </div>
          </section>

          <section className="mt-12 pb-12">
            <SubTitle>Follow me on</SubTitle>
            <div className="mt-2 flex flex-col">
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://github.com/andraderaul"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://www.linkedin.com/in/andraderaul/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                className="text-2xl font-thin dark:text-gray-300 
              text-gray-700 leading-10 tracking-wide
              hover:text-blue-500 hover:dark:text-orange-400"
                href="https://twitter.com/theandraderaul"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </section>
        </div>
      </Content>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const locales = await serverSideTranslations(locale, [
    'about',
    'common',
    'footer'
  ])
  return {
    props: {
      ...locales
    }
  }
}

export default About
