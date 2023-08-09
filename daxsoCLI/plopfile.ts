import fs from 'fs';
import path from 'path';
import { NodePlopAPI, AddActionConfig } from 'plop';

type ResponseData = {
  frontendAppType: string;
  newProjectLocation: string;
  // Add any other properties you expect `responseData` to have
};

const addAction = (destination: string, template: string): AddActionConfig => ({
  type: 'add',
  path: destination,
  templateFile: template,
});

const createFileStruct = (plop: NodePlopAPI): Promise<void> => {
  return new Promise((resolve, reject) => {  // Retrieve data from the custom Redux store
  const responseData = JSON.parse(fs.readFileSync('response.json', 'utf-8')) as ResponseData;
  console.log('Reading data from response.json:', responseData);

  // Create an action list
  const actions: AddActionConfig[] = [];
  console.log('Actions:', actions);

  // Define the frontend app types and their corresponding template directories
  const frontendAppTypes = {
    'React': 'frontend-react',
    'Next': 'frontend-next',
    'React-Native': 'frontend-react-native',
    'Svelte': 'frontend-svelte'
  };
  type FrontendAppType = keyof typeof frontendAppTypes;

  // Check if the type is a valid frontend app type
  const isFrontendAppType = (type: any): type is FrontendAppType => {
    return frontendAppTypes.hasOwnProperty(type);
  }
  // Add actions based on the response data
  if (isFrontendAppType(responseData.frontendAppType)) {
    const frontendAppType = frontendAppTypes[responseData.frontendAppType];
    actions.push(addAction(
      path.join(responseData.newProjectLocation, 'apps', frontendAppType),
      path.join(__dirname, '..', 'templates', 'apps', frontendAppType, '**', '*')
    ));
  }

  // Set generator with our actions
  plop.setGenerator('project-setup', {
    description: 'Setup project files',
    prompts: [],
    actions: actions
  });

  // Run the generator (plop.getGenerator returns a generator by name)
  plop.getGenerator('project-setup').runActions(responseData)
      .then(() => {
        console.log('Generator run successfully.');
        resolve();
      })
      .catch((error) => {
        console.error('Error running generator:', error);
        reject(error);
      });
  });
};

export default createFileStruct;
