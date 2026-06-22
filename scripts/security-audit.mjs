import { execFileSync } from 'node:child_process';

const packageManagerCli = process.env.npm_execpath;

if (!packageManagerCli) {
  console.error('Unable to determine package manager executable from npm_execpath.');
  process.exit(1);
}

execFileSync(process.execPath, [packageManagerCli, 'audit', '--audit-level', 'moderate'], {
  stdio: 'inherit',
});
execFileSync('node_modules/.bin/secretlint', ['**/*'], { stdio: 'inherit' });
