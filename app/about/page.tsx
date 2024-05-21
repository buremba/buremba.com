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
            I'm Burak, I work at <mdx.a href="https://liveramp.com">LiveRamp</mdx.a> as a Sr. Staff Software Engineer&nbsp;
            I'm a maker, entrepreneur, and software engineer. I founded <mdx.a href="https://rakam.io">Rakam</mdx.a>, acquirehired by LiveRamp in 2021.
            I do open-source work, write, snowboard, scuba dive, and run to clear my mind.
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
