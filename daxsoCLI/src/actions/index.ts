import { ResponseData } from '../store'; // adjust path to your store file

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

export default createFrontendApp;
