import { Content, Header, PrimaryText, SubTitle } from 'components'

const About = () => {
  return (
    <Content>
      <Header />
      <div className="p-4 mt-8 mb-0 mx-auto sm:w-4/5 w-full">
        <SubTitle>About</SubTitle>
        <section className="mt-8">
          <PrimaryText>
            Randomfy takes your most listened Spotify artists, selects one of
            them and shows you similar artists, so you can meet new artists
            based on the previous selected one.
          </PrimaryText>
          <div className="mt-6">
            <PrimaryText>
              Disclaimer: Randomfy is not affiliated with Spotify. The site was
              build with Nextjs, React and the Spotify API.
            </PrimaryText>
          </div>
          <div className="mt-6">
            <PrimaryText>
              Why are you reading this? You must be bored. Go listen to new
              artists.
            </PrimaryText>
          </div>
        </section>
        <section className="mt-12">
          <SubTitle>How it works</SubTitle>
          <div className="mt-8">
            <PrimaryText>
              This project shows artists and songs based on your Spotify
              recommendation. When the user signs in the application, a
              recommendation is shown.
            </PrimaryText>
          </div>
          <div className="mt-8">
            <PrimaryText>
              The user can like or dislike the recommendation, just like on
              Tinder. After that, you can make a playlist with the liked artists
              and share it with your friends. Also, you can create an image with
              these artists.
            </PrimaryText>
          </div>
        </section>

        <section className="mt-12">
          <SubTitle>Developer</SubTitle>
          <div className="mt-6">
            <PrimaryText>Raul Andrade</PrimaryText>
          </div>
        </section>

        <section className="mt-12 pb-12">
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
        </section>
      </div>
    </Content>
  )
}

export default About
