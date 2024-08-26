import { Metadata } from 'next'
import { Fragment } from 'react'
import { ButtonPop } from '../../components/buttonAccent'
import { Contact } from '../../components/contact'
import { Project24 } from '../../components/icons'
import { getProjects } from '../../lib/notion'

import type { Project } from '../../types/project'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Projects() {
  const projects = (await getProjects()) || []
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Project24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Projects</h1>
      <p className="max-w-sm mb-12 text-fore-subtle">
        A list of the past and the current projects I've worked on.
      </p>
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:-mx-6 justify-items-start md:grid-cols-3 lg:grid-cols-4">
          {projects.map(project => {
            return (
              <ButtonPop key={project.id}>
                <ProjectCard project={project} />
              </ButtonPop>
            )
          })}
        </div>
      </section>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Others</h1>
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:-mx-6 justify-items-start md:grid-cols-3 lg:grid-cols-4">
          <ButtonPop>
            <ProjectCard
              project={{
                id: 'refine',
                title: 'refine.dev',
                description: 'Seed Investor',
                link: 'https://refine.dev',
                type: 'Startup',
                year: '2023',
              }}
            />
          </ButtonPop>
          <ButtonPop>
            <ProjectCard
              project={{
                id: 'improvado',
                title: 'Improvado',
                description: 'Advisor',
                link: 'https://improvado.com',
                type: 'Startup',
                year: '2024',
              }}
            />
          </ButtonPop>
        </div>
      </section>
      <Contact />
    </Fragment>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="relative flex flex-col justify-between w-full h-full px-6 py-5 group bg-back-secondary hover:bg-back-secondary">
        <div className="flex justify-between pb-10 space-x-3 sm:space-x-0">
          <div>
            <h3 className="text-xl font-semibold text-fore-primary group-hover:text-accent">
              <span className=" focus:text-accent">{project.title}</span>
            </h3>
            <h4 className="pr-3 mt-1 font-base text-fore-subtle">
              {project.description}
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap">
          {project.tags?.map(tag => (
            <span
              key={tag}
              className="p-1 mb-2 mr-2 text-xs rounded-sm text-fore-subtle bg-back-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
