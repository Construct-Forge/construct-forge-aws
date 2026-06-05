const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'ConstructForge',
  authorAddress: 'hasanaburayyan21+construct-forge@gmail.com',
  cdktfVersion: '^0.13.2',
  constructsVersion: '10.1.52',
  defaultReleaseBranch: 'main',
  name: 'construct-forge-aws',
  repositoryUrl: 'git@github.com:Construct-Forge/construct-forge-aws.git',
  deps: [
    '@cdktf/provider-aws',
  ],
  peerDeps: [
    '@cdktf/provider-aws',
  ],
  gitignore: [
    'yalc.lock',
  ],
});
project.synth();