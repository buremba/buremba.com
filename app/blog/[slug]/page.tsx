import classNames from 'classnames'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { Metadata } from 'next'
import { Fragment } from 'react'
import { Feedback } from '../../../components/feedback'
import { components } from '../../../components/mdxComponents'
import { QuickNav } from '../../../components/quickNav'
import { getAllFrontMatters, getMdxBySlug } from '../../../lib/mdx'

export async function generateStaticParams() {
  const posts = await getAllFrontMatters()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { frontmatter } = await getMdxBySlug(params.slug)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: [
        {
          url: `https://buremba.com${frontmatter.seoImage}`,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }) {
  const { code, frontmatter } = await getMdxBySlug(params.slug)
  const Component = getMDXComponent(code)

  // const Component = useMemo(() => getMDXComponent(code), [code])

  const publishedAt = parseISO(frontmatter.publishedAt)
  const updatedAt = frontmatter.updatedAt
    ? parseISO(frontmatter.updatedAt)
    : undefined

  return (
    <Fragment>
      <div
        className={classNames(
          'page-content relative flex justify-between mt-12 mb-12' + (frontmatter.toc ? ' xl:-mr-52' : ''),
          {
            'flex-row-reverse': Boolean(frontmatter.toc),
          }
        )}
      >
        {frontmatter.toc && (
          <aside className="sticky hidden h-screen max-w-xs mt-8 ml-6 top-16 xl:block">
            <QuickNav />
          </aside>
        )}
        <article className="max-w-4xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <div className="mb-2 text-sm tracking-normal text-fore-subtle">
            <span>
              <time dateTime={publishedAt.toISOString()}>
                {format(publishedAt, 'MMMM dd yyyy')}
              </time>
            </span>
            <span> • </span>
            <span>{frontmatter.readingTime?.text}</span>
            {updatedAt && (
              <Fragment>
                <span> • </span>
                <span className="italic">
                  Last updated:{' '}
                  <time dateTime={updatedAt.toISOString()}>
                    {format(updatedAt, 'MMMM dd yyyy')}
                  </time>
                </span>
              </Fragment>
            )}
          </div>
          <h1 className="leading-normal mb-10 text-5xl font-extrabold text-fore-primary">
            {frontmatter.title}
          </h1>
          <Component components={components} />
        </article>
      </div>
      <Feedback post={frontmatter} />
    </Fragment>
  )
}
