import { describe, expect, it } from 'vitest'
import { projects } from './projects'
import { findThumbnail } from './thumbnails'

describe('projects', () => {
  it('has entries', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('is sorted newest first', () => {
    const dates = projects.map((p) => p.date)
    expect(dates).toEqual([...dates].sort().reverse())
  })

  it('uses unique titles', () => {
    const titles = projects.map((p) => p.title)
    expect(new Set(titles).size).toBe(titles.length)
  })

  it.each(projects)('$title has valid fields', (project) => {
    expect(project.date).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/)
    expect(project.context.trim()).not.toBe('')
    expect(project.team.length).toBeGreaterThan(0)
    expect(project.description.length).toBeGreaterThan(0)
    expect(project.tags.length).toBeGreaterThan(0)
    if (project.image !== undefined) expect(findThumbnail(project.image)).toBeDefined()
    expect(new Set(project.tags).size).toBe(project.tags.length)
    const urls = (project.links ?? []).map((link) => link.url)
    expect(new Set(urls).size).toBe(urls.length)
    expect(new Set(project.description).size).toBe(project.description.length)
    for (const paragraph of project.description) expect(paragraph.trim()).not.toBe('')
    for (const { label, url } of project.links ?? []) {
      expect(label.trim()).not.toBe('')
      expect(url).toMatch(/^https:\/\//)
    }
  })
})
