import { defineConfig } from "cypress"
import { loadEnvFile }  from 'node:process'

loadEnvFile()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
