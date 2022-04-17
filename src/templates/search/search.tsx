import { useMemo, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content, PrimaryButton, PrimaryText, Skeleton } from 'components'
import { useRelatedArtistsMutation } from 'queries'
import { Festival, ImageCollage, Playlist } from 'features'

export const SearchTemplate = () => {
  const [search, setSearch] = useState('')
  const { mutate, data, isLoading } = useRelatedArtistsMutation()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log('asda')
    mutate(search)
  }

  const isEmpty = useMemo(() => data?.data.length === 0, [data?.data.length])

  return (
    <Content>
      <DynamicHeader />
      {!data?.data && (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl my-0 mx-auto flex flex-col items-center"
        >
          <div className="p-4 mb-2">
            <PrimaryText>
              Search a artist by name and we&apos;ll make a playlist for you
            </PrimaryText>
          </div>

          <label className="relative block sm:w-96">
            <span className="sr-only">Search</span>
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
              onChange={handleOnChange}
              value={search}
            />
          </label>

          <div className="flex justify-center p-10">
            <PrimaryButton type="submit">Search</PrimaryButton>
          </div>
        </form>
      )}
      {isLoading && <Skeleton />}
      {isEmpty && (
        <PrimaryText>
          We can&apos;t found any related artist, try a different artist.
        </PrimaryText>
      )}
      {data?.data && (
        <>
          <Playlist artists={data.data} />
          <ImageCollage artists={data.data} />
          <Festival artists={data.data} />
        </>
      )}
    </Content>
  )
}
