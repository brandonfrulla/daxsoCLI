#!/usr/bin/env node

import { renderTitle } from "./../src/utils/renderTitle"
import { logger } from "./../src/utils/logger";
import { askQuestions } from "./store";
import createFileStruct from "../plopfile";
import { NodePlopAPI } from 'plop';
import nodePlop from 'node-plop';

const plop = nodePlop();

process.stdin.resume();

const main = async () => {
//triggerAnalytics('start', 'started');

    renderTitle();
    //triggerAnalytics('renderTitle', 'title');
    //buildPkgInstallerMap(["devTest", "devTest2"])
    askQuestions();

    createFileStruct(await plop);

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