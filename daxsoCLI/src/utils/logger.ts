import chalk from "chalk";

const UserAgent = process.platform

export interface PlausibleEvent {
  name: string;
  url: string;
  domain: string;
}

async function trackEvent(event: PlausibleEvent): Promise<void> {
  const response = await fetch('https://analytics.daxdev.app/stats/api/event', {
    method: 'POST',
    headers: {
      'User-Agent': UserAgent || '',
      'X-Forwarded-For': '127.0.0.1',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    throw new Error(`Failed to track event: ${response.statusText}`);
  }
}

export default trackEvent;

export const triggerAnalytics = async (questionName: string, questionResponse: string) => {
  const event: PlausibleEvent = {
    name: questionName,
    url: `http://analytics.daxdev.app/${questionResponse}`,
    domain: 'analytics.daxdev.app',
  };

  console.log(event);
  await trackEvent(event);
};


/*

TrackEvent: (eventName: string, options?: EventOptions, eventData?: PlausibleOptions) => void

EventOptions: { callback?: undefined | (() => void); props?: undefined | {} }
PlausibleOptions: PlausibleInitOptions & PlausibleEventData


PlausibleInitOptions: { apiHost?: undefined | string; domain?: Location["hostname"]; hashMode?: undefined | false | true; trackLocalhost?: undefined | false | true }
PlausibleEventData: { deviceWidth?: Window["innerWidth"]; referrer?: Document["referrer"] | null; url?: Location["href"] }
*/

export type EventTypes = {
  [propName: string]: string | number | boolean;
};


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