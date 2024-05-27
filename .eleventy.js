export default function configure() {
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
