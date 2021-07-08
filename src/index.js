#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const program = require('commander');

const {
    getConfig,
    existFiles
} = require('./helpers');

// Load our package.json, so that we can pass the version onto `commander`.
const { version } = require('../package.json');

// Get the default config for this component (looks for local/global overrides,falls back to sensible defaults).
const config = getConfig()
// Find the path to the selected template file.
// passed every time.


const templatePath = `./templates/${program.type}.js`;

clear();
console.log(chalk.green("########## node-auto-crud ##########"));
console.log(
    chalk.yellow(
        figlet.textSync('Faisalskp', { horizontalLayout: 'full' })
    )
);
console.log(chalk.green("########## node-auto-crud ##########"));

// Convenience wrapper around Prettier, so that config doesn't have to be ,passed every time.
program
    .version(version)
    .arguments('<componentName>')
    .option(
        '-t, --type <componentType>',
        'Type of React component to generate (default: "functional")',
        /^(class|pure-class|functional)$/i,
        config.type
    )
    .option(
        '-d, --dir <pathToDirectory>',
        'Path to the "components" directory (default: "src/components")',
        config.dir
    )
    .option(
        '-x, --extension <fileExtension>',
        'Which file extension to use for the component (default: "js")',
        config.extension
    )
    .parse(process.argv);

const [componentName] = program.args;

// console.log("**************************************")
// console.log(program)
// console.log("**************************************")
// console.log("######################################")
// console.log(componentName, "componentName")
// console.log("######################################")


const exist = existFiles(componentName, templatePath);


