export const Footer = () => {
  return (
    <footer
      className="p-4 flex 
      justify-center font-thin dark:text-gray-300 
      text-gray-700 fixed bottom-0 left-0 right-0
      bg-neutral-50 dark:bg-neutral-700
      "
    >
      <p>
        {`Created with `}
        <span className="text-rose-600">♥️</span>
        {` by `}
        <a
          className="border-b-blue-500 dark:border-b-orange-400 
          text-blue-500 dark:text-orange-400 hover:border-b-[1px]"
          href="https://github.com/andraderaul"
          target="_blank"
          rel="noreferrer"
        >
          Raul Andrade
        </a>
      </p>
    </footer>
  )
}
