import { PropsWithChildren } from 'react'

type ContentProps = Record<string, unknown>

export const Content = ({ children }: PropsWithChildren<ContentProps>) => {
  return (
    <main className="max-w-6xl my-0 mx-auto bg-neutral-50 dark:bg-neutral-700">
      {children}
    </main>
  )
}
