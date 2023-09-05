import { ResponseData, responseData } from '../store.js'; // adjust path to your store file

import fs from 'fs-extra';
import handlebars from 'handlebars';
import path from 'path';



export const generatePackageJson = async ( data: { [key: string]: any }, targetDirectory: string, ) => {
  if (typeof targetDirectory !== 'string') {
    console.log( 'Target directory must be a string!' );
    return;
  }

  try {
    // Use a relative path from the project root (assuming you execute the script from the project root)
    const projectRoot = process.cwd();
    console.log(projectRoot)
    const templatePath = path.join( projectRoot, './src/plopTemps/next-app/package.json.hbs' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( data );

    // Save the populated template to a file
    const outputPath = path.join( targetDirectory + `/${data.newProjectName}`, 'package.json' );
    fs.writeFileSync( outputPath, result );

    console.log( 'package.json generated successfully!' );
  } catch ( error ) {
    console.error( 'Error generating package.json:', error );
  }

}

export const generateTemplate = async ( data: { [key: string]: any }, targetDirectory: string, ) => {
  if (typeof targetDirectory !== 'string') {
    console.log( 'Target directory for frontend template generation must be a string!' );
    return;
  }

  if (data.newFrontendAppType === "Next") {
    try {
        const projectRoot = process.cwd();
        const templatePath = path.join(projectRoot, './templates/apps/frontend-next/frontend-next-app');

        const outputPath = path.join(projectRoot, `./${responseData.newProjectName as string}/frontend-next-app`);

        // Ensure the output directory exists, if not, it will create it
        fs.ensureDirSync(outputPath);

        // Copy all files from the templatePath to the outputPath
        fs.copySync(templatePath, outputPath);

        console.log('Next.js templates copied successfully!');
    } catch (error) {
        console.error('Error during copy operation:', error);
    }
}
  if (data.newFrontendAppType === "React") {
    const projectRoot = process.cwd();
    const templatePath = path.join( projectRoot, './../../../templates/apps/frontend-react/frontend-react-app' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( responseData );

    // Save the populated template to a file
    const outputPath = path.join( responseData.frontendAppType as string + `/${responseData.newProjectName}`, './../../../templates/apps/frontend-react' );
    fs.writeFileSync( outputPath, result );

    console.log( 'React.js generated successfully!' );
  }
}

export const generateSmartContract = async ( data: { [key: string]: any }, targetDirectory: string, ) => {
  if (typeof targetDirectory !== 'string') {
    console.log( 'Target directory for Smart Contract generation must be a string!' );
    return console.error(targetDirectory);
  }

  if (data.newSmartContractERC === "ERC20") {
    try {
      const projectRoot = process.cwd();
      const templatePath = path.join(projectRoot, './templates/apps/blockchain');

      const outputPath = path.join(projectRoot, `./${responseData.newProjectName as string}/blockchain`);

      // Ensure the output directory exists, if not, it will create it
      fs.ensureDirSync(outputPath);

      // Copy all files from the templatePath to the outputPath
      fs.copySync(templatePath, outputPath);

      console.log('Blockchain templates copied successfully!');
  } catch (error) {
      console.error('Error during copy operation:', error);
  }
  }

  if (data.newSmartContractERC === 'ERC721') {
    const projectRoot = process.cwd();
    const templatePath = path.join( projectRoot, './../../templates/apps/blockchain/contracts/ERC721.sol' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( responseData );

    // Save the populated template to a file
    const outputPath = path.join( responseData.newSmartContractERC as string + `/${responseData.newProjectName}`, './../../../templates/smart-contracts/erc721' );
    fs.writeFileSync( outputPath, result );

    console.log( 'ERC721 generated successfully!' );
  }

  if (data.newSmartContractERC !== 'ERC721' && data.newSmartContractERC !== 'ERC20') {
    console.error('No Smart Contract generated');
  }

}
