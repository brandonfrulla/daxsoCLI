import { randomUUID } from "crypto";
import { getPlatform, getUserPkgManager } from "./getUserPackageManager";
import { responseData } from "../store";


async function sendAnalytics( actionName: string, actionValue: string | number | Error, sessionID: string ) {
    const maxRetries = 3;
    let attempt = 0;
    let success = false;


    while ( attempt < maxRetries && !success ) {
        try {
            const response = await fetch(
                `https://api.us-east.tinybird.co/v0/events?name=CLIdevLogs&wait=true`,
                {
                    method: 'POST',
                    body: JSON.stringify( {
                        timestamp: new Date().toISOString(),
                        UUID: randomUUID(),
                        platform: await getPlatform(),
                        packageManager: await getUserPkgManager(),
                        sessionID: sessionID,
                        actionName: actionName,
                        actionValue: actionValue,
                    } ),
                    headers: {
                        Authorization: 'Bearer p.eyJ1IjogIjkzNmYyOTEwLTA1MGEtNGQ1Ny04MzcxLTZjNDM3NzhlOWU2NiIsICJpZCI6ICI0ZTdiOTAwZi0yNWEwLTRmMTctOTBkNS0xMjUwODJiZjg1ZDkiLCAiaG9zdCI6ICJ1c19lYXN0In0.mUG9EKQmY4Y1XZeWPA6Hw-JqRBOVUOHB7hzs4MB8WWg',
                    },
                }
            );

            if ( response.status === 200 ) {
                success = true;
            } else if ( response.status >= 500 && response.status < 600 ) {
                attempt++;
                console.error( `Error: ${response.status}. Retrying in ${Math.pow( 2, attempt )} seconds...` );
                await new Promise( res => setTimeout( res, 1000 * Math.pow( 2, attempt ) ) );
            } else {
                console.error( `Error: ${response.status}. Please investigate.` );
                break;
            }

        } catch ( error ) {
            console.error( 'Error sending analytics:', error );
        }
    }

    if ( attempt >= maxRetries ) {
        console.error( 'Max retries reached. Logging data for later investigation.' );
        // Here you could save the data to a log or buffer for later retry
    }
}

export default sendAnalytics;