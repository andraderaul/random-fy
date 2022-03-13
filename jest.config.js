module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules',
    '/.next/',
    'stories.tsx',
    '/mock',
    '/constants',
    '/styles',
    '_app.tsx',
    '_document.tsx'
  ],
  coveragePathIgnorePatterns: [
    'stories.tsx',
    '/mock',
    '/constants',
    '/styles',
    '_app.tsx',
    '_document.tsx'
  ],
  transformIgnorePatterns: ['node_modules/(?!imask|react-extras)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
