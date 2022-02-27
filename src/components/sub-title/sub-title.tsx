import { PropsWithChildren } from 'react'

type SubTitleProps = Record<string, unknown>

export const SubTitle = ({ children }: PropsWithChildren<SubTitleProps>) => {
  return (
    <h2 className="text-5xl text-gray-800 font-semibold leading-10 tracking-wide">
      {children}
    </h2>
  )
}
