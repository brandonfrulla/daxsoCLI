import { ResponseData } from '../store'; // adjust path to your store file

import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';


const createFrontendApp = (responseData: ResponseData, newProjectLocation: string) => {
  if (responseData.frontendAppType === 'react') {
    return {
      type: 'shell',
      command: 'npx create-vite frontend --template react-ts',
      cwd: `${newProjectLocation}/apps/frontend`,
    };
  }
  if (responseData.frontendAppType === 'svelte') {
    return {
        type: 'shell',
        command: 'echo "svelte"',
        cwd: `${newProjectLocation}/apps/frontend`,
        };
    }

  return null;
};


export const generatePackageJson = async (data: { [key: string]: any }, targetDirectory: any) => {
    try {
        // Read the Handlebars template
        const templatePath = path.join(__dirname, './../../plopTemps/next-app/package.json.hbs');
        const source = fs.readFileSync(templatePath, 'utf-8');

        // Compile the template with Handlebars
        const template = handlebars.compile(source);

        // Populate the template with data
        const result = template(data);

        // Save the populated template to a file
        const outputPath = path.join(targetDirectory, 'package.json');
        fs.writeFileSync(outputPath, result);

        console.log('package.json generated successfully!');
    } catch (error) {
        console.error('Error generating package.json:', error);
    }
}
 

export default createFrontendApp;
