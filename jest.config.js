const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // react-markdown/remark-gfm ship ESM-only; the widget tests don't need real
  // markdown rendering, so a lightweight mock avoids fighting Jest's ESM transform.
  moduleNameMapper: {
    '^react-markdown$': '<rootDir>/__mocks__/react-markdown.js',
    '^remark-gfm$': '<rootDir>/__mocks__/remark-gfm.js',
  },
}

module.exports = createJestConfig(customJestConfig)
