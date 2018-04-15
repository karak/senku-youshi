module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.tag$': 'riot-jest-transformer',
  },
  collectCoverageFrom: ['src/**', '!**/node_modules/**'],
};
