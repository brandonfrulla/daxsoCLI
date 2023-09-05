import { getUserPkgManager, PackageManager } from './../utils/getUserPackageManager.ts'; // Adjust the path to your actual module

describe('getUserPkgManager function', () => {
  
  afterEach(() => {
    delete process.env.npm_config_user_agent;
  });

  it('should return "yarn" if npm_config_user_agent starts with "yarn"', () => {
    process.env.npm_config_user_agent = 'yarn/some-version-info';
    
    const result: PackageManager = getUserPkgManager();
    expect(result).toBe('yarn');
  });

  it('should return "pnpm" if npm_config_user_agent starts with "pnpm"', () => {
    process.env.npm_config_user_agent = 'pnpm/some-version-info';
    
    const result: PackageManager = getUserPkgManager();
    expect(result).toBe('pnpm');
  });

  it('should return "npm" if npm_config_user_agent starts with something other than "yarn" or "pnpm"', () => {
    process.env.npm_config_user_agent = 'npm/some-version-info';
    
    const result: PackageManager = getUserPkgManager();
    expect(result).toBe('npm');
  });

  it('should return "npm" if npm_config_user_agent is not set', () => {
    const result: PackageManager = getUserPkgManager();
    expect(result).toBe('npm');
  });
});
