import chalk from "chalk";

import crypto from 'crypto';
import { getPlatform, getUserPkgManager } from "./getUserPackageManager";
import { handleResponseChange, responseData } from "../store";
import sendAnalytics from "./analytics";

let sessionID: string | null = null;

export const generateSessionID = async (): Promise<string | null> => {
  if(sessionID) {
    return sessionID;
  }

  try {
    const packageManager = await getUserPkgManager();
    const platform = await getPlatform();

    // Get the current date and time
    const dateTime = new Date().toISOString();

    // Create a hash using the crypto module
    const hash = crypto.createHash('sha256');
    hash.update(dateTime);
    hash.update(packageManager);
    hash.update(platform);

    // Get the hash digest as a hexadecimal string for the session ID
    sessionID = hash.digest('hex');
    responseData.sessionID = sessionID; // Ensure responseData is defined
    await handleResponseChange(responseData);    
  } catch (error) {
    console.error('Error generating session ID:', error);
    return null;
  }
};

export default generateSessionID;

export const logger = {
  error( ...args: unknown[] ) {

    console.log( chalk.red( ...args ) );
  },
  warn( ...args: unknown[] ) {
    console.log( chalk.yellow( ...args ) );
  },
  info( ...args: unknown[] ) {
    console.log( chalk.cyan( ...args ) );
  },
  success( ...args: unknown[] ) {
    console.log( chalk.green( ...args ) );
  },
};

