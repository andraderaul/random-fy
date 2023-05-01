import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Cookies } from 'utils'

const Logout = () => {
  const { t } = useTranslation('logout')

  return <div>{t('title')}</div>
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'logout',
    'footer'
  ])

  Cookies.destroy({
    name: 'authorization',
    options: {
      ctx: context
    }
  })

  context.res
    .writeHead(302, {
      Location: '/'
    })
    .end()

  return {
    props: {
      ...locales
    }
  }
}

export default Logout
