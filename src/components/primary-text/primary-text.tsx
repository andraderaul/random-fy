import { PropsWithChildren } from 'react'

type PrimaryTextProps = Record<string, unknown>

export const PrimaryText = ({
  children
}: PropsWithChildren<PrimaryTextProps>) => {
  return (
    <p className="text-5xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
      {children}
    </p>
  )
}
