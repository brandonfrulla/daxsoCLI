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
    handleResponseChange( responseData );
}

export const newProjectName = async (): Promise<void> => {
    const { newProjectName } = await inquirer.prompt<{ newProjectName: string }>( {
        name: 'newProjectName',
        type: 'input',
        message: 'What is the name of your new project?',
        default: 'My New Project',
    } );
    
    responseData.newProjectName = newProjectName;
    handleResponseChange( responseData );
}


export const allowAnalytics = async (): Promise<void> => {
    const { analytics } = await inquirer.prompt<{ analytics: string }>( {
        name: 'analytics',
        type: 'confirm',
        message: 'Would you like to allow basic analytics? It would really help us out if you did. We don\'t sell your data or anything like that. We just want to know how many people are using our tool so we can make it better. Would you like to allow analytics?',
        default: 'yes',
    } );

    responseData.analytics = analytics;
    handleResponseChange( responseData );
}