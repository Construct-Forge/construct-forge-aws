const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'user',
  authorAddress: 'user@domain.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  name: 'construct-forge-aws',
  repositoryUrl: 'git@github.com:Construct-Forge/construct-forge-aws.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();