import { promises as fs } from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const defaultTemplate = `
# Prisma Schema Documentation
{{#each models}}
## {{this.name}}
| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
{{#each this.fields}}
| {{name}} | {{type}} | {{#if isList}}Yes{{else}}No{{/if}} | {{#if isRequired}}Yes{{else}}No{{/if}} | {{#if isUnique}}Yes{{else}}No{{/if}} |
{{/each}}
{{/each}}
## Enums
{{#each enums}}
### {{this.name}}
{{this.values.join(", ")}}
{{/each}}
`;

const loadTemplate = async (templatePath: string): Promise<Handlebars.TemplateDelegate> => {
    try {
        if (templatePath) {
            const templateContent = await fs.readFile(templatePath, 'utf-8');
            return Handlebars.compile(templateContent);
        } else {
            return Handlebars.compile(defaultTemplate);
        }
    } catch (error) {
        console.error('Error loading template, using default:', error);
        return Handlebars.compile(defaultTemplate);
    }
};

export default loadTemplate;
