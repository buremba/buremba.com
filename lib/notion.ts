import { Client } from '@notionhq/client'
import type { Project } from '../types/project'
import type { NotionDoingNow } from '../types/rich-presence'
import * as helper from './notion-helper'

const notion = new Client({ auth: process.env.NOTION_KEY })
const dbid_projects = process.env.NOTION_PROJECTS_DB_ID || ''

export async function getProjects() {
  try {
    const { results } = await notion.databases.query({
      database_id: dbid_projects,
      sorts: [
        {
          property: 'Type', 
          timestamp: 'last_edited_time',
          direction: 'descending',
        },
        {
          property: 'Year',
          timestamp: 'last_edited_time',
          direction: 'descending',
        },
      ],
    })

    return results.map(
      result =>
        ({
          id: result.id,
          title: helper.asRichText(result.properties.Title)?.rich_text?.[0]?.plain_text,
          description: helper.asRichText(result.properties.Description)
            .rich_text?.[0]?.plain_text,
          link: helper.asUrl(result.properties.Link).url,
          type: helper.asSelect(result.properties.Type).select?.name,
          year: helper.asRichText(result.properties.Year).rich_text?.[0]
            .plain_text,
          tags: helper
            .asMultiSelect(result.properties.Tags)
            .multi_select.map(tag => tag.name),
        } as Project)
    )
  } catch (error) {
    console.error(error)
    return undefined
  }
}
