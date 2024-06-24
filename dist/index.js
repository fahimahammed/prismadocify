#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentationGenerator_1 = require("./documentationGenerator");
async function main() {
    try {
        await (0, documentationGenerator_1.generateDocumentation)();
        console.log('Documentation generation completed.');
    }
    catch (error) {
        console.error('Error generating documentation:', error);
        process.exit(1); // Exit with a non-zero code to indicate failure
    }
}
main();
