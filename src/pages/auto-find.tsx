import type { GetServerSidePropsContext, NextPage } from 'next'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { AutoFind as AutoFindTemplate } from 'templates'

type AutoFindProps = {
  auth: string
  artistId: string
}

const AutoFind: NextPage<AutoFindProps> = () => {
  return <AutoFindTemplate />
}

export default AutoFind
