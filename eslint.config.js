import cypressPlugin from 'eslint-plugin-cypress/flat'
import dlxConfig     from '@digitallinguistics/eslint-config'

import globals from 'globals'

const projectConfig = { languageOptions: { globals: { ...globals.nodeBuiltin } } }

export default [...dlxConfig, projectConfig, cypressPlugin.configs.recommended]
