#!/usr/bin/env node

import { generateDocumentation } from './documentationGenerator';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function main() {
    const argv = yargs(hideBin(process.argv))
        .option('schemaPath', {
            alias: 's',
            type: 'string',
            description: 'Path to the Prisma schema file',
            default: 'prisma/schema.prisma',
        })
        .option('outputPath', {
            alias: 'o',
            type: 'string',
            description: 'Output path for the generated documentation',
            default: 'prisma-docs.md',
        })
        .option('verbose', {
            alias: 'v',
            type: 'boolean',
            description: 'Enable verbose logging',
            default: false,
        })
        .help()
        .argv;

    try {
        await generateDocumentation(argv.schemaPath, argv.outputPath, argv.verbose);
        console.log('Documentation generation completed.');
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error generating documentation: ${error.message}`);
        } else {
            console.error('Unknown error occurred:', error);
        }
        process.exit(1);
    }
}

main();
