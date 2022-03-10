export const Footer = () => {
  return (
    <footer className="pb-6 flex justify-center font-thin dark:text-gray-300 text-gray-700">
      <p>
        {`Created with `}
        <span className="text-rose-600">♥️</span>
        {` by `}
        <a
          className="border-b-blue-500 text-blue-500 hover:border-b-[1px]"
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
