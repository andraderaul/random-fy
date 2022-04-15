import type { GetServerSidePropsContext, NextPage } from 'next'

import { protectedRoutes } from 'utils'
import { FindTemplate } from 'templates'

type FindProps = {
  auth: string
}

const AutoFind: NextPage<FindProps> = () => {
  return <FindTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const auth = await protectedRoutes(context)

  return {
    props: {
      auth
    }
  }
}

export default AutoFind
