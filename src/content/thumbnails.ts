const files = import.meta.glob<string>('../assets/projects/*.webp', {
  eager: true,
  import: 'default',
})

const PLACEHOLDER = 'missing'

/** URL of a thumbnail in src/assets/projects/, or undefined if the file doesn't exist. */
export function findThumbnail(name: string): string | undefined {
  return files[`../assets/projects/${name}.webp`]
}

/** URL of a project's thumbnail, or the placeholder when no image is set. */
export function thumbnailUrl(name: string | undefined): string {
  const file = name ?? PLACEHOLDER
  const url = findThumbnail(file)
  if (!url) throw new Error(`Missing thumbnail: src/assets/projects/${file}.webp`)
  return url
}
