"use strict";
// src/documentationGenerator.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocumentation = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const PRISMA_SCHEMA_PATH = path_1.default.join(process.cwd(), 'prisma', 'schema.prisma');
const OUTPUT_DOC_PATH = path_1.default.join(process.cwd(), 'prisma-docs.md');
const generateDocumentation = async () => {
    try {
        const schema = await fs_1.promises.readFile(PRISMA_SCHEMA_PATH, 'utf-8');
        const models = parseModels(schema);
        const enums = parseEnums(schema);
        const documentation = generateMarkdown(models, enums);
        await fs_1.promises.writeFile(OUTPUT_DOC_PATH, documentation);
        console.log(`Documentation generated at ${OUTPUT_DOC_PATH}`);
    }
    catch (error) {
        console.error('Error generating documentation:', error);
    }
};
exports.generateDocumentation = generateDocumentation;
const parseModels = (schema) => {
    const modelRegex = /model (\w+) \{([^}]+)\}/g;
    const fieldRegex = /(\w+)\s+(\w+)(\[\])?(!)?(\s*@unique)?/g;
    const models = [];
    let match;
    while ((match = modelRegex.exec(schema)) !== null) {
        const modelName = match[1];
        const fieldsBlock = match[2];
        const fields = [];
        let fieldMatch;
        while ((fieldMatch = fieldRegex.exec(fieldsBlock)) !== null) {
            const [_, name, type, isList, isRequired, isUnique] = fieldMatch;
            fields.push({
                name,
                type,
                isRequired: !type.endsWith('?'),
                isList: !!isList,
                isUnique: !!isUnique,
            });
        }
        models.push({ name: modelName, fields });
    }
    return models;
};
const parseEnums = (schema) => {
    const enumRegex = /enum (\w+) \{([^}]+)\}/g;
    const enums = [];
    let match;
    while ((match = enumRegex.exec(schema)) !== null) {
        const enumName = match[1];
        const valuesBlock = match[2].trim();
        const enumValues = valuesBlock.split('\n').map(value => value.trim().replace(',', ''));
        enums.push({ name: enumName, values: enumValues });
    }
    return enums;
};
const generateMarkdown = (models, enums) => {
    let markdown = '# Prisma Schema Documentation\n\n';
    // Generate documentation for models
    for (const model of models) {
        markdown += `## ${model.name}\n\n`;
        markdown += '| Field | Type | List | Required | Unique |\n';
        markdown += '|-------|------|------|----------|--------|\n';
        for (const field of model.fields) {
            if (field.enumValues) {
                markdown += `| ${field.name} | ${field.type} | ${field.isList ? 'Yes' : 'No'} | ${field.isRequired ? 'Yes' : 'No'} | ${field.isUnique ? 'Yes' : 'No'} |\n`;
                markdown += `| | **Possible Values:** ${field.enumValues.join(', ')} |\n`;
            }
            else {
                markdown += `| ${field.name} | ${field.type} | ${field.isList ? 'Yes' : 'No'} | ${field.isRequired ? 'Yes' : 'No'} | ${field.isUnique ? 'Yes' : 'No'} |\n`;
            }
        }
        markdown += '\n';
    }
    // Generate documentation for enums
    markdown += '## Enums\n\n';
    for (const enumType of enums) {
        markdown += `### ${enumType.name}\n\n`;
        markdown += '---\n';
        markdown += `${enumType.values.join(', ')}\n`;
        markdown += '\n';
    }
    return markdown;
};
