import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 490_000

export const instantiations = 7000

export const instantiationsPath = join(root, 'packages', 'opener-worker')

export const workerPath = join(root, '.tmp/dist/dist/openerWorkerMain.js')

export const playwrightPath = import.meta.resolve('../../e2e/node_modules/playwright/index.mjs').toString()
