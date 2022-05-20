import { GetServerSidePropsContext } from 'next'

const SignIn = () => {
  return <div>SignIn...</div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res
    .writeHead(302, {
      Location: '/api/login'
    })
    .end()
  return {
    props: {}
  }
}

export default SignIn
