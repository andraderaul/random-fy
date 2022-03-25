import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content, Card } from 'components'

export const Home = () => {
  return (
    <Content>
      <DynamicHeader />

      <div className="p-10 flex justify-around flex-wrap">
        <Card label="I want to meet a new artists" href="/find" />
        <Card label="I want to search artist by name" href="/auto-find" />
      </div>
    </Content>
  )
}
