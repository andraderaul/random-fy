import { PropsWithChildren } from 'react'

type GridProps = Record<string, unknown>

export const Grid = ({ children }: PropsWithChildren<GridProps>) => {
  return (
    <div className="grid grid-cols-auto-fit gap-4 p-4 justify-items-center">
      {children}
    </div>
  )
}
