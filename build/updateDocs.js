/**
 * Updates the version number and dates in documentation.
 * NOTE: This script is run using npm scripts rather than 11ty
 * because it's not part of the website build, just the project build.
 */

import path         from 'node:path'
import { readFile } from 'node:fs/promises'

import { outputFile, readJSON } from 'fs-extra/esm'

import {
  parse as parseYAML,
  stringify as stringifyYAML,
} from 'yaml'

const citationPath = path.resolve(import.meta.dirname, `../CITATION.cff`)
const licensePath  = path.resolve(import.meta.dirname, `../LICENSE`)
const packagePath  = path.resolve(import.meta.dirname, `../package.json`)

const yearRegExp = /(?<=[0-9]{4}\u2013)[0-9]{4}/v

async function updateCitation() {

  const meta         = await readJSON(packagePath)
  const citationYAML = await readFile(citationPath, `utf8`)
  const citationData = parseYAML(citationYAML)

  citationData.version = meta.version

  await outputFile(citationPath, stringifyYAML(citationData))

}

async function updateLicense() {

  const currentYear = (new Date).getFullYear()
  const licenseText = await readFile(licensePath, `utf8`)
  const updatedText = licenseText.replace(yearRegExp, `${ currentYear }`)

  await outputFile(licensePath, updatedText)

}

export default async function updateDocs() {
  await updateCitation()
  await updateLicense()
}

updateDocs()
