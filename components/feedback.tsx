'use client'

import { useForm } from '@formspree/react'
import React from 'react'
import type { Frontmatter } from '../types/frontmatter'
import { ExtLink, Input, TextArea } from './atoms'

interface Props {
  post: Frontmatter
}

export function Feedback({ post }: Props) {
  const [state, handleSubmit] = useForm('feedbackForm')

  const submitForm = e => {
    handleSubmit(e)
    e.target.reset()
  }

  return (
    <div className="mt-32 full-width-container bg-back-secondary">
      <div className="container max-w-xl px-16 p-16 mx-auto">
        Would you like to comment? Reach me out <ExtLink link="https://twitter.com/bu7emba">@bu7emba</ExtLink>!
      </div>
    </div>
  )
}
