import fs from 'fs';
import { newProjectAuthor, newProjectLocationQuestion, newProjectName, promptFrontend } from './questions/frontend';
import { promptBlockchain, promptSmartContractERC } from './questions/blockchain';

// Define a type for the response data
export type ResponseData = Record<string, unknown>;

// Create an object to hold the response data
export const responseData: ResponseData = {};

// Define the callback function that will be called when the response changes
export const handleResponseChange = ( data: ResponseData ) => {
  // Check if all questions have been answered
  if ( data && Object.keys( data ).length === questionFunctions.length ) {
    // Generate a JSON file with the response data
    const json = JSON.stringify( data );
    fs.writeFileSync( 'response.json', json );

    console.log( 'Responses saved to response.json' );
  }
};

//write funtion that writes to file
const writeToFile = ( data: ResponseData ) => {
  // Generate a JSON file with the response data
  const json = JSON.stringify( data );
  fs.writeFileSync( 'response.json', json );

  console.log( 'Responses saved to response.json' );
};

// Define an array of question functions
export const questionFunctions: Array<() => Promise<void>> = [

  // Question 1
  newProjectLocationQuestion,
  newProjectAuthor,
  promptFrontend,
  newProjectName,
  promptBlockchain,
  promptSmartContractERC,


];

// Define a function to trigger the question prompts
export const askQuestions = async (): Promise<void> => {
  for ( const question of questionFunctions ) {
    await question();
  }
};
