import type { NextApiRequest, NextApiResponse } from 'next'

import { scopes } from '../../constants'
import { spotifyApi } from 'services'
import { Rnd } from 'utils'

type Data = {
  name: string
}

const state = Rnd.generateRandomString(16)

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
}
