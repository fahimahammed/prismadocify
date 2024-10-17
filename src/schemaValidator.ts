import { promises as fs } from 'fs';
import path from 'path';

const validateSchema = async (schemaPath: string): Promise<void> => {
    try {
        const schema = await fs.readFile(schemaPath, 'utf-8');
        
        // Example simple validation: check for required models or enums.
        if (!/model\s+\w+\s+\{/.test(schema)) {
            throw new Error('No models found in schema.');
        }

        if (!/enum\s+\w+\s+\{/.test(schema)) {
            console.warn('No enums found in schema.'); // Warning, not an error
        }

        console.log('Schema validation passed.');
    } catch (error) {
        throw new Error(`Schema validation failed: ${error.message}`);
    }
};

export default validateSchema;


// usage in main script if wanted to

//import validateSchema from './schemaValidator';

//async function main() {
  //  try {
    //    await validateSchema('prisma/schema.prisma');
      //  await generateDocumentation();
    //    console.log('Documentation generation completed.');
 //   } catch (error) {
     //   console.error('Error generating documentation:', error);
     //   process.exit(1); // Exit with a non-zero code to indicate failure
  //  }
//}
