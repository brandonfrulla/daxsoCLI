import { handleResponseChange, responseData } from "../store";

export type PackageManager = "npm" | "pnpm" | "yarn";

export const getUserPkgManager: () => PackageManager = () => {
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

const getPlatform = async () => {
  const platform = process.platform;

  if (platform === "win32") {
    return "win";
  } else if (platform === "darwin") {
    return "mac";
  } else {
    return "linux";
  }

  responseData.platform = platform;
  await handleResponseChange( responseData );

}