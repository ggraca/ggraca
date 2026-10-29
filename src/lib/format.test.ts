import { describe, expect, it } from 'vitest'
import { formatMonth } from './format'

describe('formatMonth', () => {
  it('formats year and month as words', () => {
    expect(formatMonth('2022-08')).toBe('August 2022')
    expect(formatMonth('2014-01')).toBe('January 2014')
    expect(formatMonth('2016-12')).toBe('December 2016')
  })

  it('rejects invalid input', () => {
    expect(() => formatMonth('2022-13')).toThrow()
    expect(() => formatMonth('August 2022')).toThrow()
  })
})
