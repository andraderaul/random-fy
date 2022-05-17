export const getLocale = () => {
  if (typeof window === 'undefined') {
    return 'BR'
  }
  const language = window?.navigator?.language
  return language?.split('-')[1] || 'BR'
}
