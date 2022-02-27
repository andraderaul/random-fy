import { PropsWithChildren } from 'react'

type ContentProps = Record<string, unknown>

export const Content = ({ children }: PropsWithChildren<ContentProps>) => {
  return (
    <div className="max-w-6xl my-0 mx-auto min-h-screen bg-neutral-50">
      {children}
    </div>
  )
}
