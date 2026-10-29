const monthFormat = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

/** "2022-08" → "August 2022" */
export function formatMonth(date: string): string {
  const [year, month] = date.split('-').map(Number)
  if (!year || !month || month < 1 || month > 12) {
    throw new Error(`Invalid month: ${date}`)
  }
  return monthFormat.format(new Date(Date.UTC(year, month - 1, 1)))
}
