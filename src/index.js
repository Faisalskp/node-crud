#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const program = require('commander');

const {
    existFiles
} = require('./helpers');

// Load our package.json, so that we can pass the version onto `commander`.
const { version } = require('../package.json');

const templatePath = `./templates/${program.type}.js`;

clear();
console.log(chalk.green("########## node-auto-crud ##########"));
console.log(
    chalk.yellow(
        figlet.textSync('Faisalskp', { horizontalLayout: 'full' })
    )
);
console.log(chalk.green("########## node-auto-crud ##########"));

program
    .version(version)
    .arguments('<componentName>')
    .option('-h, --helper', 'make new helper')
    .parse(process.argv)


const options = program.opts();
if (options.helper) {
    console.log(chalk.blue("************ Helpers *************"));
    const [componentName] = program.args;
    console.log(chalk.red("going to genrate", componentName, "helper.!"));

    console.log(chalk.yellow(" Comming Soon ........... under maintenance "));
    console.log(chalk.yellow(" Comming Soon ........... under maintenance "));
    console.log(chalk.yellow(" Comming Soon ........... under maintenance "));

    console.log(chalk.blue("************ Helpers *************"));
} else {
    const [componentName] = program.args;
    const exist = existFiles(componentName, templatePath);
}