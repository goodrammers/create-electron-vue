#!/usr/bin/env node

import { program } from 'commander';
import {execSync} from 'node:child_process'
import * as fs from 'fs'

program
    .name('create-electron')
    .description('CLI to scaffold an Electron project')
    .argument('<project-name>', 'Name of the project to create')
    .action((projectName: string) => {
        console.log(`Creating a new Electron project named ${projectName}...`);
        const gitRepoURL = 'https://github.com/goodrammers/create-electron-vue.git';
        execSync('git init')
        execSync('git remote add origin ' + gitRepoURL)
        execSync('git config core.sparseCheckout true')
        execSync('echo /Template >> .git/info/sparse-checkout')
        execSync('git pull origin main', {stdio: 'ignore'})
        fs.renameSync('./Template', projectName)
        fs.rmSync('.git', { recursive: true, force: true})
    });

program.parse(process.argv);
