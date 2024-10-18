import { watch, promises as fsPromises } from 'fs';
import path from 'path';
import { generateDocumentation } from './documentationGenerator';

const PRISMA_SCHEMA_PATH = path.join(process.cwd(), 'prisma', 'schema.prisma');

export const watchSchema = async () => {
    try {
        await fsPromises.access(PRISMA_SCHEMA_PATH); // Check if the file exists
        console.log('Watching for changes in Prisma schema...');

        let timeout: NodeJS.Timeout;
        watch(PRISMA_SCHEMA_PATH, async (eventType) => {
            if (eventType === 'change') {
                console.log('Schema changed, regenerating documentation...');
                clearTimeout(timeout);
                timeout = setTimeout(async () => {
                    try {
                        await generateDocumentation(PRISMA_SCHEMA_PATH, 'prisma-docs.md', false);
                    } catch (error) {
                        console.error('Error during documentation generation:', error);
                    }
                }, 1000); // Debounce time
            }
        });
    } catch (error) {
        console.error('Error setting up watcher:', error);
    }
};

// Usage in the main file, if needed
// import { watchSchema } from './watcher';
// ...
