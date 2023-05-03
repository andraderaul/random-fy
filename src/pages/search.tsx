import type { GetServerSidePropsContext, NextPage } from 'next'

import { protectedRoutes } from 'utils'
import { SearchTemplate } from 'templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type SearchProps = {
  auth: string
}

const Search: NextPage<SearchProps> = () => {
  return <SearchTemplate />
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'search',
    'common',
    'footer'
  ])
  const auth = await protectedRoutes(context)

  return {
    props: {
      auth,
      ...locales
    }
  }
}

export default Search
