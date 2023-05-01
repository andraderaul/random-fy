import { PrimaryButton, PrimaryText } from 'components'
import { useTranslation } from 'next-i18next'

type GenericErrorProps = {
  tryAgain: () => void
}

export const GenericError = ({ tryAgain }: GenericErrorProps) => {
  const { t } = useTranslation('common')

  return (
    <div className="h-60 p-4 flex flex-col justify-evenly items-center">
      <PrimaryText>{t('error.title')}</PrimaryText>
      <PrimaryButton aria-label="try-again" onClick={tryAgain}>
        {t('error.subtitle')}
      </PrimaryButton>
    </div>
  )
}
