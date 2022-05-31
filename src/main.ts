import '@unocss/reset/tailwind.css'
import 'uno.css'

import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const createApp = ViteSSG(
  App,
  { routes },
)

export default createApp
