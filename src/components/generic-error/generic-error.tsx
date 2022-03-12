import { PrimaryButton, PrimaryText } from 'components'

type GenericErrorProps = {
  tryAgain: () => void
}

export const GenericError = ({ tryAgain }: GenericErrorProps) => {
  return (
    <div className="h-60 p-4 flex flex-col justify-evenly items-center">
      <PrimaryText>Something wrong! :(</PrimaryText>
      <PrimaryButton aria-label="try-again" onClick={tryAgain}>
        Try Again
      </PrimaryButton>
    </div>
  )
}
