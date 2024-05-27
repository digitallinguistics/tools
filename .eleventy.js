import emptyDistDir from './build/emptyDistDir.js'

export default function configure(config) {

  config.on(`eleventy.before`, emptyDistDir)

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
