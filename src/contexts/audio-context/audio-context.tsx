import { createContext } from 'react'

type AudioContextProps = {
  source: string
  setSource?: (source: string) => void
}

const InitialValues: AudioContextProps = {
  source: ''
}

export const AudioContext = createContext<AudioContextProps>(InitialValues)
