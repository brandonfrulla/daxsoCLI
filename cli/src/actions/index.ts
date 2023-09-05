import { responseData } from '../store.ts'; // adjust path to your store file

import fs from 'fs-extra';
import handlebars from 'handlebars';
import path from 'path';
import { PKG_ROOT } from '~/utils/renderTitle.ts';
import sendAnalytics from '../utils/analytics.ts';
import { logger } from '../utils/logger.ts';



export const generatePackageJson = async ( data: { [key: string]: any }, targetDirectory: string, ) => {
  if (typeof targetDirectory !== 'string') {
    console.log( 'Target directory must be a string!' );
    return;
  }

  try {
    // Use a relative path from the project root (assuming you execute the script from the project root)
    const templatePath = path.join( PKG_ROOT, './src/plopTemps/next-app/package.json.hbs' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( data );

    // Save the populated template to a file
    const outputPath = path.join( targetDirectory + `/${data.newProjectName}`, 'package.json' );
    fs.writeFileSync( outputPath, result );
    await sendAnalytics('Package.json', 'success', responseData.sessionID as string);
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
        const templatePath = path.join(PKG_ROOT, './templates/apps/frontend-next/frontend-next-app');

        const outputPath = path.join(PKG_ROOT, `./${responseData.newProjectName as string}/frontend-next-app`);

        // Ensure the output directory exists, if not, it will create it
        fs.ensureDirSync(outputPath);

        // Copy all files from the templatePath to the outputPath
        fs.copySync(templatePath, outputPath);
        await sendAnalytics('Next.js', 'success', responseData.sessionID as string);
        logger.success('Next.js templates copied successfully!');
    } catch (error) {
        logger.error('Error during copy operation:', error);
        await sendAnalytics('Error', error, responseData.sessionID as string);
    }
}
  if (data.newFrontendAppType === "React") {
    const templatePath = path.join( PKG_ROOT, './../../../templates/apps/frontend-react/frontend-react-app' );
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
      const templatePath = path.join(PKG_ROOT, './templates/apps/blockchain');

      const outputPath = path.join(PKG_ROOT, `./${responseData.newProjectName as string}/blockchain`);

      // Ensure the output directory exists, if not, it will create it
      fs.ensureDirSync(outputPath);

      // Copy all files from the templatePath to the outputPath
      fs.copySync(templatePath, outputPath);
      sendAnalytics('ERC20', 'success', responseData.sessionID as string);
      console.log('Blockchain templates copied successfully!');
  } catch (error) {
      console.error('Error during copy operation:', error);
  }
  }

  if (data.newSmartContractERC === 'ERC721') {
    try {
      const templatePath = path.join(PKG_ROOT, './templates/apps/blockchain');

      const outputPath = path.join(PKG_ROOT, `./${responseData.newProjectName as string}/blockchain`);

      // Ensure the output directory exists, if not, it will create it
      fs.ensureDirSync(outputPath);

      // Copy all files from the templatePath to the outputPath
      fs.copySync(templatePath, outputPath);
      sendAnalytics('ERC721', 'success', responseData.sessionID as string);
      console.log('Blockchain templates copied successfully!');
  } catch (error) {
      console.error('Error during copy operation:', error);
  }
}

  if (data.newSmartContractERC !== 'ERC721' && data.newSmartContractERC !== 'ERC20') {
    console.error('No Smart Contract generated');
  }

}
