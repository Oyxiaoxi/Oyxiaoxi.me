import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/navbar.css'
import './styles/markdown.css'
import 'uno.css'

import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'

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
  ({ router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
  },
)

export default createApp
