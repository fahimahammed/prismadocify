import { promises as fs } from 'fs';
import path from 'path';

const PRISMA_SCHEMA_PATH = path.join(process.cwd(), 'prisma', 'schema.prisma');
const OUTPUT_DOC_PATH = path.join(process.cwd(), 'prisma-docs.md');

interface Field {
    name: string;
    type: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    enumValues?: string[]; // New property to hold enum values
}

interface Model {
    name: string;
    fields: Field[];
}

interface EnumType {
    name: string;
    values: string[];
}

const parseSchema = async (): Promise<string> => {
    const schema = await fs.readFile(PRISMA_SCHEMA_PATH, 'utf-8');
    const modelRegex = /model (\w+) \{([^}]+)\}/g;
    const fieldRegex = /(\w+)\s+(\w+)(\[\])?(!)?(\s*@unique)?/g;
    const enumRegex = /enum (\w+) \{([^}]+)\}/g;

    const models: Model[] = [];
    const enums: EnumType[] = [];

    let match: RegExpExecArray | null;
    while ((match = modelRegex.exec(schema)) !== null) {
        const modelName = match[1];
        const fieldsBlock = match[2];

        const fields: Field[] = [];
        let fieldMatch: RegExpExecArray | null;
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

    // Parse enums
    while ((match = enumRegex.exec(schema)) !== null) {
        const enumName = match[1];
        const valuesBlock = match[2].trim();
        const enumValues = valuesBlock.split('\n').map(value => value.trim().replace(',', ''));
        enums.push({ name: enumName, values: enumValues });
    }

    return generateMarkdown(models, enums);
};

const generateMarkdown = (models: Model[], enums: EnumType[]): string => {
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
            } else {
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

const generateDocumentation = async () => {
    try {
        const documentation = await parseSchema();
        await fs.writeFile(OUTPUT_DOC_PATH, documentation);
        console.log(`Documentation generated at ${OUTPUT_DOC_PATH}`);
    } catch (error) {
        console.error('Error generating documentation:', error);
    }
};

generateDocumentation();
