import { handleResponseChange, responseData } from "../../store";
import fs from 'fs';
import inquirer from "inquirer";
import path from 'path';

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


export const promptFrontend = async (): Promise<void> => {
    const { frontendAppType } = await inquirer.prompt<{ frontendAppType: string }>( {
        name: 'frontend',
        type: 'list',
        message: 'What frontend framework will you be using?',
        choices: ["React", "React-Native", "Next", "Svelte", "Other"],
        default: 'React',
    } );

    //const contractLanguageString = frontend.toString().replace( / /g, '' ).replace( /,/g, '/' );
    //triggerAnalytics( 'frontend', contractLanguageString );

    if ( frontendAppType === 'React' ) {
        //logger.success( `${frontend}` );
        console.log( `${frontendAppType}` );

    } else if ( frontendAppType ===  'Next') {
        //logger.error( `I'm sorry ${frontend} has not been implemented.` );
        console.log( `Building` );
        //get the path and file of the project and fill in the folder with handbar templates
        
    } else if ( frontendAppType !== 'Next' || 'React') {
        console.log(`I'm sorry but ${frontendAppType} has not been implemented yet.`)
    }

    responseData.frontendAppType = frontendAppType;
    await handleResponseChange( responseData );

    
    
}
