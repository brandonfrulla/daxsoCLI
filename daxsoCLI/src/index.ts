#!/usr/bin/env node

import { renderTitle } from "./../src/utils/renderTitle"
import { logger } from "./../src/utils/logger";
import { newProjectLocation } from "./questions/frontend";
import { askQuestions, responseData } from "./store";
import { generatePackageJson, generateTemplate } from "./actions";



process.stdin.resume();


const main = async () => {
  renderTitle();
  logger.info('Starting new project...');

  await askQuestions();

  generatePackageJson(responseData, responseData.newProjectLocation as string)
  //generateTemplate(responseData, responseData.frontendAppType as string)
  process.exit(0);
}

main().catch((err) => {
  process.on('SIGINT', () => {});  // CTRL+C
  process.on('SIGQUIT', () => {}); // Keyboard quit
  process.on('SIGTERM', () => {}); // `kill` command
    logger.error("Aborting installation...");
    if (err instanceof Error) {
      logger.error(err);
    } else {
      logger.error(
        "An unknown error has occurred. Please open an issue on github with the below:",
      );
      console.log(err);
    }
    process.exit(1);
  });