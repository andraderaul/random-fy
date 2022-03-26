import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content, PrimaryButton } from 'components'
import { useRelatedArtistsMutation } from 'queries'
import { Toaster } from 'react-hot-toast'

export const AutoFind = () => {
  const [search, setSearch] = useState('')
  const { mutate, data, isLoading } = useRelatedArtistsMutation()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    mutate(search)

    console.log({ search })
  }

  return (
    <Content>
      <DynamicHeader />
      <form onSubmit={handleSubmit} className="max-w-2xl my-0 mx-auto">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon className="h-5 w-5 stroke-slate-300 " />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 
            block bg-white w-full border border-slate-300 rounded-md 
            py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
            focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for artist..."
            type="text"
            name="search"
            onChange={handleOnChange}
            value={search}
          />
        </label>
        <div className="flex justify-center p-10">
          <PrimaryButton type="submit">Search</PrimaryButton>
        </div>
      </form>
      {isLoading && <div>carregando...</div>}
      {data?.data.map((item, index) => (
        <div key={index}>
          {item.name} - {item.track.name}
        </div>
      ))}

      <Toaster
        toastOptions={{
          error: {
            style: {
              background: 'red',
              color: 'white'
            }
          }
        }}
      />
    </Content>
  )
}
