// src/index.ts

import { generateDocumentation } from './documentationGenerator';

async function run() {
    await generateDocumentation();
}

run();
