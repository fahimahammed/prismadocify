import { watch } from 'fs';
import path from 'path';
import { generateDocumentation } from './documentationGenerator';

const PRISMA_SCHEMA_PATH = path.join(process.cwd(), 'prisma', 'schema.prisma');

export const watchSchema = () => {
    console.log('Watching for changes in Prisma schema...');
    
    watch(PRISMA_SCHEMA_PATH, async (eventType) => {
        if (eventType === 'change') {
            console.log('Schema changed, regenerating documentation...');
            await generateDocumentation(PRISMA_SCHEMA_PATH, 'prisma-docs.md', false);
        }
    });
};


// usage if needed in the main files!

// import { watchSchema } from './watcher';

// async function main() {
//     try {
//         await generateDocumentation();
//         watchSchema(); // Starts the watch mode for automatic regeneration
//     } catch (error) {
//         console.error('Error generating documentation:', error);
//         process.exit(1);
//     }
// }

// main();
