import { handleResponseChange, responseData } from "../../store";
import fs from 'fs';
import handlebars from "handlebars";
import inquirer from "inquirer";
import path from 'path';
import { logger } from "../../utils/logger";
import { getPlatform, getUserPkgManager } from "../../utils/getUserPackageManager";
import sendAnalytics from "../../utils/analytics";



export const checkCompatibility = async (): Promise<void> => {
    const platformIs = await getPlatform();
    const packageManagerIs = await getUserPkgManager();
    
    if (await platformIs === "win" && await packageManagerIs === "yarn") {
        logger.error("Yarn is not supported on Windows. Please use npm or pnpm.");
        return;
    }

    if (await platformIs === "win" && await packageManagerIs === "pnpm") {
        logger.error("pnpm is not supported on Windows. Please use npm or yarn.");
        return;
    }

    logger.success(`Looks like you are using ${packageManagerIs} on ${platformIs}.`);

}

export const newProjectLocation = async (): Promise<void> => {
    //get current working directory
    const cwd = process.cwd();

    try {
        const { newProjectLocation } = await inquirer.prompt<{ newProjectLocation: string }>({
            name: 'newProjectLocation',
            type: 'input',
            message: 'Where would you like to create your new Project?',
            default: cwd,
        });
        responseData.newProjectLocation = newProjectLocation; // Ensure responseData is defined
        await handleResponseChange(responseData); // Ensure handleResponseChange is defined and handles errors
        
        const absolutePath = path.resolve(newProjectLocation);
        
        if (fs.existsSync(absolutePath)) {
            console.log(`The directory ${absolutePath} already exists!`);
            return;
        }
        //T-216 error handling and excpetions for preexisting files
        //T-217 Test coverage for this
        


        
        fs.mkdirSync(absolutePath);
        console.log(`Created new project folder at ${absolutePath}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

export const newProjectName = async (): Promise<void> => {
    let projectFolder: string;

    while (true) { // This loop will keep asking for a new project name until a non-existing one is provided
        try {
            const { newProjectName } = await inquirer.prompt<{ newProjectName: string }>({
                name: 'newProjectName',
                type: 'input',
                message: 'What is the name of your new project?',
                default: 'My New Project',
            });
            responseData.newProjectName = newProjectName;
            await handleResponseChange(responseData);

            projectFolder = path.resolve(process.cwd(), newProjectName); // Convert the name to an absolute path in the current directory

            if (fs.existsSync(projectFolder)) {
                console.log(`A project with the name "${newProjectName}" already exists in this directory! Please provide a different name.`);
            } else {
                break; // Break out of the loop if the project name (directory) does not exist
            }

        } catch (error) {
            console.error('An error occurred:', error);
            return; // If there's an unexpected error, exit out of the function
        }
    }

    try {

        fs.mkdirSync(projectFolder);
        console.log(`Created new project folder at ${projectFolder}`);
    } catch (error) {
        console.error('An error occurred while trying to create the project:', error);
    }
};



export const newProjectAuthor = async (): Promise<void> => {
    const { newProjectAuthor } = await inquirer.prompt<{ newProjectAuthor: string }>( {
        name: 'newProjectAuthor',
        type: 'input',
        message: 'Who is the creator of your new project?',
        default: 'Dax the Dev', 
    } );

    responseData.newProjectAuthor = newProjectAuthor;
    await handleResponseChange( responseData );
}


export const newFrontendAppType = async (): Promise<void> => {

    const { newFrontendAppType } = await inquirer.prompt<{ newFrontendAppType: string }>({
        name: 'newFrontendAppType',
        type: 'list',
        message: 'What frontend framework will you be using?',
        choices: ["Next"],
        default: 'Next',
    });

    logger.info(`You chose ${newFrontendAppType} as your frontend framework.`);

    responseData.newFrontendAppType = newFrontendAppType;

    await handleResponseChange(responseData);

    await sendAnalytics('Frontend App', newFrontendAppType, responseData.sessionID as string);
}

const gerateNextApp = async () => {
    const projectRoot = process.cwd();
    const templatePath = path.join( projectRoot, './../../../templates/apps/frontend-next/frontend-next-app' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( responseData );

    // Save the populated template to a file
    const outputPath = path.join( responseData.frontendAppType as string + `/${responseData.newProjectName}`, './../../../templates/apps/frontend-next' );
    fs.writeFileSync( outputPath, result );

    console.log( 'Next.js generated successfully!' );
}