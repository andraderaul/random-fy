import { SearchIcon } from '@heroicons/react/outline'

type InputSearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  label?: string
}

export const InputSearch = ({
  label = 'Search',
  onChange,
  value
}: InputSearchProps) => {
  return (
    <label className="relative block sm:w-96">
      <span className="sr-only">{label}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="h-5 w-5 stroke-slate-300" />
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 
    block bg-white sm:w-full border border-slate-300 rounded-md 
    py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
    focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for artist..."
        type="text"
        name="search"
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
