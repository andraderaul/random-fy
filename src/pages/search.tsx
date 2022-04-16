import type { GetServerSidePropsContext, NextPage } from 'next'

import { protectedRoutes } from 'utils'
import { SearchTemplate } from 'templates'

type SearchProps = {
  auth: string
}

const Search: NextPage<SearchProps> = () => {
  return <SearchTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const auth = await protectedRoutes(context)

  return {
    props: {
      auth
    }
  }
}

export default Search
