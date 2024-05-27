import { emptyDir } from 'fs-extra'
import path         from 'node:path'

const distDir = path.resolve(import.meta.dirname, `../dist`)

export default function emptyDistDir() {
  return emptyDir(distDir)
}
