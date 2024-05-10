#!/usr/bin/env node

import * as fs from 'fs'
import path from 'node:path'
import {execSync} from 'child_process'
const devDir = path.join(__dirname, '..', 'dev')
if (fs.existsSync(devDir)) {
    fs.rmSync(devDir, { recursive: true, force: true})
}
fs.mkdirSync(devDir)
process.chdir(devDir)
execSync('ts-node ../src/create-electron-vue.ts dev-sample')
