import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer
      className="p-4 flex 
      justify-center font-thin dark:text-gray-300 
      text-gray-700"
    >
      <p>
        {t('initial')}
        <span className="text-rose-600">♥️</span>
        {t('prep')}
        <a
          className="border-b-blue-500 dark:border-b-orange-400 
          text-blue-500 dark:text-orange-400 hover:border-b-[1px]"
          href="https://github.com/andraderaul"
          target="_blank"
          rel="noreferrer"
        >
          {t('name')}
        </a>
      </p>
    </footer>
  )
}
