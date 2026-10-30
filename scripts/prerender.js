// Runs after `vite build` and `vite build --ssr`: renders the app to HTML and writes it into
// dist/index.html, so the page has content before (and without) JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')
const file = new URL('../dist/index.html', import.meta.url)
const template = await readFile(file, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) throw new Error(`Missing ${placeholder} in dist/index.html`)

await writeFile(file, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(new URL('../dist-ssr', import.meta.url), { recursive: true })
