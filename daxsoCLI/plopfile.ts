import { NodePlopAPI } from 'plop';
import fs from 'fs';
import createFrontendApp from './src/actions';

const createFileStruct = (plop: NodePlopAPI) => {
  // Retrieve data from the custom Redux store
  const responseData = JSON.parse(fs.readFileSync('response.json', 'utf-8'));

  // Generator for creating the Turbo Repo project
  plop.setGenerator('turbo-repo', {
    description: 'Generate a Turbo Repo project',
    prompts: [], // No prompts needed since we already have the data
    actions: [
        createFrontendApp(responseData, responseData.newProjectLocation),
    ],
  });
}

export default createFileStruct;
