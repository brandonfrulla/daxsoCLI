import inquirer from "inquirer";
import { responseData, handleResponseChange } from "../../store";

export const newProjectLocationQuestion = async (): Promise<void> => {
    const { newProjectLocation } = await inquirer.prompt<{ newProjectLocation: string }>( {
        name: 'newProjectLocation',
        type: 'input',
        message: 'Where would you like to create your new project?',
        default: process.cwd(),
    } );

    responseData.newProjectLocation = newProjectLocation;
    handleResponseChange( responseData );
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

export const newProjectName = async (): Promise<void> => {
    const { newProjectName } = await inquirer.prompt<{ newProjectName: string }>( {
        name: 'newProjectName',
        type: 'input',
        message: 'What is the name of your new project?',
        default: 'My New Project',
    } );
    
    responseData.newProjectName = newProjectName;
    await handleResponseChange( responseData );
}


export const allowAnalytics = async (): Promise<void> => {
    const { analytics } = await inquirer.prompt<{ analytics: string }>( {
        name: 'analytics',
        type: 'confirm',
        message: 'Would you like to allow basic analytics? It would really help us out if you did. We don\'t sell your data or anything like that. We just want to know how many people are using our tool so we can make it better. Would you like to allow analytics?',
        default: 'yes',
    } );

    responseData.analytics = analytics;
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

    } else if ( frontendAppType !==  'React') {
        //logger.error( `I'm sorry ${frontend} has not been implemented.` );
        console.log( `I'm sorry ${frontendAppType} has not been implemented.` );
    }

    responseData.frontendAppType = frontendAppType;
    await handleResponseChange( responseData );
    
}