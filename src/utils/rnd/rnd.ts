type GetRndNumber = {
  min: number
  max: number
}

const getRndNumber = ({ min, max }: GetRndNumber) =>
  Math.floor(Math.random() * (max - min)) + min

const generateRandomString = (length: number) => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export const Rnd = {
  getRndNumber,
  generateRandomString
}
