import { PropsWithChildren } from 'react'

type TitleProps = Record<string, unknown>

export const Title = ({ children }: PropsWithChildren<TitleProps>) => {
  return <h1 className="text-3xl text-center text-gray-800">{children}</h1>
}
