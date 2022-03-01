import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = {
  onClick: () => void
  ariaLabel?: string
} & ButtonHTMLAttributes<unknown>

export const PrimaryButton = ({
  onClick,
  ariaLabel,
  children,
  ...rest
}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      {...rest}
      className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
