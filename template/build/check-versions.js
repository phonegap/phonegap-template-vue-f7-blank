/* eslint-disable import/no-extraneous-dependencies, global-require */

const semver = require('semver');
const chalk = require('chalk');
const packageConfig = require('../package.json');

const exec = cmd => require('child_process').execSync(cmd).toString().trim();

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node,
  },
  {
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm,
  },
];

module.exports = () => {
  const warnings = [];
  for (let i = 0; i < versionRequirements.length; i++) { // eslint-disable-line no-plusplus
    const mod = versionRequirements[i];
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(
        `${mod.name}: ${chalk.red(mod.currentVersion)} should be ${chalk.green(mod.versionRequirement)}`,
      );
    }
  }

  if (warnings.length) {
    console.log('');
    console.log(chalk.yellow('To use this template, you must update following to modules:'));
    console.log();
    for (let i = 0; i < warnings.length; i++) { // eslint-disable-line no-plusplus
      const warning = warnings[i];
      console.log(`  ${warning}`);
    }
    console.log();
    process.exit(1);
  }
};
