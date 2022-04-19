import { useMemo, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content, InputSearch, PrimaryButton, PrimaryText } from 'components'
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

    mutate(search)
  }

  const isEmpty = useMemo(() => data?.data.length === 0, [data?.data.length])

  return (
    <Content>
      <DynamicHeader />
      {!data?.data && (
        <form
          onSubmit={handleSubmit}
          className={`max-w-2xl my-0 mx-auto flex flex-col items-center ${
            isLoading ? 'animate-pulse' : ''
          }`}
        >
          <div className="p-4 mb-2">
            <PrimaryText>
              Search a artist by name and we&apos;ll make a playlist for you
            </PrimaryText>
          </div>
          <InputSearch onChange={handleOnChange} value={search} />
          <div className="flex justify-center p-10">
            <PrimaryButton type="submit">Search</PrimaryButton>
          </div>
          {isLoading && (
            <p className="font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide">
              Loading...
            </p>
          )}
        </form>
      )}
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
