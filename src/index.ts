// src/index.ts

import { generateDocumentation } from './documentationGenerator';

async function main() {
    try {
        await generateDocumentation();
        console.log('Documentation generation completed.');
    } catch (error) {
        console.error('Error generating documentation:', error);
        process.exit(1); // Exit with a non-zero code to indicate failure
    }
}

main();
