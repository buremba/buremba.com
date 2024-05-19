import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'
import { About24 } from '../../components/icons'
import { components as mdx } from '../../components/mdxComponents'
import { RichPresenceList } from '../../components/richPresenceList'
import { getRecentMovies } from '../../lib/letterboxd'

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {
  const letterboxd = await getRecentMovies(1)

  return (
    <Fragment>
      <div className="container">
        <span className="inline-flex p-3 rounded-full bg-back-subtle">
          <About24 />
        </span>
        <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
          About Me
        </h1>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <mdx.p>
            I'm Burak, I work full-time as a game programmer at&nbsp;
            <mdx.a href="https://secret6.com">Secret 6, Inc</mdx.a>. In my free
            time, I study front-end development with React. My goal is to write
            useful apps and contribute to open source projects while working a
            full-time job.
          </mdx.p>
          <mdx.h3>Why make this website?</mdx.h3>
          <mdx.p>
            I made this website to learn what actually goes into web
            development. From planning, design, development, launch, and
            maintenance. For sure there are other things that I have yet to
            encounter, and I’m ready to learn them. This also serves a
            motivation for me to continue making projects because now I finally
            have a place to showcase them.
          </mdx.p>
          <mdx.h3>Why write a blog?</mdx.h3>
          <mdx.p>
            My <mdx.a href="/blog/welcome">first blog post</mdx.a> explained it.
            I'd be happy if you read it 😀
          </mdx.p>
          <mdx.h3>What else?</mdx.h3>
          <mdx.p>
            When I’m not programming, I endlessly browse Reddit (
            <mdx.a href="https://www.reddit.com/r/gamedev/">r/gamedev</mdx.a>,{' '}
            <mdx.a href="https://www.reddit.com/r/formula1/">r/formula1</mdx.a>,{' '}
            <mdx.a href="https://www.reddit.com/r/animalsbeingderps/">
              r/animalsbeingderps
            </mdx.a>
            ). I also love watching{' '}
            <mdx.a href="https://letterboxd.com/buremba/">movies</mdx.a> and
            listening to{' '}
            <mdx.a href="https://www.last.fm/user/Buremba">music</mdx.a><mdx.a href="https://open.spotify.com/user/burakemre">(2)</mdx.a>.
            You can catch me out running or cycling around London.
          </mdx.p>
        </article>
        <h3 className="mb-4 text-2xl font-bold leading-tight mt-14 text-accent">
          Recents
        </h3>
        <RichPresenceList presenceList={[letterboxd,
          // await getRecentGames()
        ]} />
      </div>
      <Contact />
    </Fragment>
  )
}

export const revalidate = 60
