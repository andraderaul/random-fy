import { Content, Header, PrimaryText, SubTitle } from 'components'

const About = () => {
  return (
    <Content>
      <Header />
      <div className="p-4 mt-8 mb-0 mx-auto sm:w-4/5 w-full">
        <SubTitle>About</SubTitle>
        <div className="mt-8">
          <PrimaryText>
            Randomfy takes your most listened to Spotify artists and select one
            of them for you can know new artists based in this artist selected.
            If you liked that artist, you can give a like. After that, you can
            make a playlist with the artists liked and share with your friends.
            Also you can create a picture with this artists.
          </PrimaryText>
          <div className="mt-6">
            <PrimaryText>
              Disclaimer: Randomfy is not affiliated with Spotify. The site is
              built on Nextjs, React and the Spotify API.
            </PrimaryText>
          </div>
          <div className="mt-6">
            <PrimaryText>
              Why are you reading this? You must be bored. Go listen to new
              artists.
            </PrimaryText>
          </div>
        </div>

        <div className="mt-12">
          <SubTitle>Developer</SubTitle>
          <div className="mt-6">
            <PrimaryText>Raul Andrade</PrimaryText>
          </div>
        </div>

        <div className="mt-12 pb-12">
          <SubTitle>Follow me on</SubTitle>
          <div className="mt-2 flex flex-col">
            <a
              className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide"
              href="https://github.com/andraderaul"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide"
              href="https://www.linkedin.com/in/andraderaul/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              className="text-2xl font-thin dark:text-gray-300 text-gray-700 leading-10 tracking-wide"
              href="https://twitter.com/theandraderaul"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </Content>
  )
}

export default About
