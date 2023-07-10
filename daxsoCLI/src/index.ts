#!/usr/bin/env node

import { renderTitle } from "./../src/utils/renderTitle"
import { logger } from "./../src/utils/logger";



process.stdin.resume();

const main = async () => {
//triggerAnalytics('start', 'started');

    renderTitle();
    //triggerAnalytics('renderTitle', 'title');
    //buildPkgInstallerMap(["devTest", "devTest2"])

    //read the contents of response.json and write to .env

    
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