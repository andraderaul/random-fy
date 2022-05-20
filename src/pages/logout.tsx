import { GetServerSidePropsContext } from 'next'
import { Cookies } from 'utils'

const Logout = () => {
  return <div>logout...</div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  Cookies.destroy({
    name: 'authorization',
    options: {
      ctx: context
    }
  })
  Cookies.destroy({
    name: 'refreshToken',
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
    props: {}
  }
}

export default Logout
