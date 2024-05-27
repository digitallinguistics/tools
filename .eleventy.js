import emptyDistDir from './build/emptyDistDir.js'

export default function configure(config) {

  config.on(`eleventy.before`, emptyDistDir)
  config.addPassthroughCopy(`src/CNAME`)

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
