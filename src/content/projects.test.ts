import { describe, expect, it } from 'vitest'
import { experience } from './profile'
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

  it('numbers the featured projects 1, 2, 3… with no gaps', () => {
    const positions = projects.flatMap((p) => (p.featured === undefined ? [] : [p.featured]))
    expect(positions.length).toBeGreaterThanOrEqual(2)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions.map((_, i) => i + 1))
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

describe('experience', () => {
  it('has exactly one current job, listed first', () => {
    expect(experience.filter((job) => job.end === undefined)).toEqual([experience[0]])
  })

  it('uses unique company names', () => {
    const companies = experience.map((job) => job.company)
    expect(new Set(companies).size).toBe(companies.length)
  })

  it('is sorted newest first', () => {
    const starts = experience.map((job) => job.start)
    expect(starts).toEqual([...starts].sort((a, b) => b - a))
  })

  it.each(experience)('$company has valid fields', (job) => {
    expect(Number.isInteger(job.start)).toBe(true)
    if (job.end !== undefined) expect(job.end).toBeGreaterThanOrEqual(job.start)
    expect(job.url).toMatch(/^https:\/\//)
    expect(job.role.trim()).not.toBe('')
    expect(job.summary.length).toBeGreaterThan(0)
    expect(new Set(job.tags).size).toBe(job.tags.length)
    expect(new Set(job.summary).size).toBe(job.summary.length)
    const urls = (job.links ?? []).map((link) => link.url)
    expect(new Set(urls).size).toBe(urls.length)
    for (const { label, url } of job.links ?? []) {
      expect(label.trim()).not.toBe('')
      expect(url).toMatch(/^https:\/\//)
    }
  })
})
