module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.tag$': 'riot-jest-transformer',
  },
  collectCoverageFrom: ['src/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '\.snap$']
};
