#!/usr/bin/env node

import { renderTitle } from "./../src/utils/renderTitle"
import { generateSessionID, logger } from "./../src/utils/logger";
import { askQuestions, responseData } from "./store";
import { generatePackageJson, generateSmartContract, generateTemplate } from "./actions";
import { checkCompatibility } from "./questions/frontend";
import sendAnalytics from "./utils/analytics";



process.stdin.resume();


const main = async () => {
  await generateSessionID();
  await sendAnalytics('Start', 'success' , responseData.sessionID as string);
  renderTitle();

  await checkCompatibility();
  logger.info('Starting new project...');


  await askQuestions();

  generatePackageJson(responseData, responseData.newProjectLocation as string)
  generateTemplate(responseData, responseData.newFrontendAppType as string)
  generateSmartContract(responseData, responseData.newSmartContractERC as string)

  await sendAnalytics('Complete', "success" , responseData.sessionID as string);
  process.exit(0);

}

main().catch((err) => {
  process.on('SIGINT', () => sendAnalytics('Killed_Program', 'success', responseData.sessionID as string));  // CTRL+C
  process.on('SIGQUIT', () => sendAnalytics('Killed_Program', 'success', responseData.sessionID as string)); // Keyboard quit
  process.on('SIGTERM', () => sendAnalytics('Killed_Program', 'success', responseData.sessionID as string)); // `kill` command
    logger.error("Aborting installation...");
    if (err instanceof Error) {
      sendAnalytics('Error', err, responseData.sessionID as string)
      logger.error(err);
    } else {
      logger.error(
        "An unknown error has occurred. Please open an issue on github with the below:",
      );
      console.log(err);
    }
    process.exit(1);
  });