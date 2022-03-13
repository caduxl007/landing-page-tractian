// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  }
}

module.exports = createJestConfig(customJestConfig)