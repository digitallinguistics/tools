import { defineConfig } from 'cypress'
import { loadEnvFile }  from 'node:process'

if (!process.env.GITHUB_ACTIONS) loadEnvFile()

export default defineConfig({
  e2e: {
    baseUrl:     `http://localhost:${ process.env.PORT }`,
    specPattern: `**/*.test.js`,
    supportFile: false,
  },
  screenshotOnRunFailure: false,
})
