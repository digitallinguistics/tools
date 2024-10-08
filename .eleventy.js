import emptyDistDir    from './build/emptyDistDir.js'
import { loadEnvFile } from 'node:process'

if (!process.env.GITHUB_ACTIONS) loadEnvFile()

export default function configure(config) {

  config.addPassthroughCopy(`src/CNAME`)
  config.on(`eleventy.before`, emptyDistDir)
  config.setServerOptions({ port: process.env.PORT })

  return {
    dir: {
      includes: `components`,
      input:    `src`,
      layouts:  `layouts`,
      output:   `dist`,
    },
    templateFormats: [`html`],
  }

}
