import { handleResponseChange, responseData } from "../store";

export type PackageManager = "npm" | "pnpm" | "yarn";

export const getUserPkgManager = async (): Promise<PackageManager> => {
  // This environment variable is set by npm and yarn but pnpm seems less consistent
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent) {
    if (userAgent.startsWith("yarn")) {
      return "yarn";
    } else if (userAgent.startsWith("pnpm")) {
      return "pnpm";
    } else {
      return "npm";
    }
  } else {
    // If no user agent is set, assume npm
    return "npm";
  }
};

export const getPlatform = async (): Promise<string> => {
  const platform = process.platform;

  if (platform === "win32") {
    responseData.platform = "win";
    await handleResponseChange(responseData);
    return "win";
  } else if (platform === "darwin") {
    responseData.platform = "mac";
    await handleResponseChange(responseData);
    return "mac";
  } else {
    responseData.platform = "linux";
    await handleResponseChange(responseData);
    return "linux";
  }
};
