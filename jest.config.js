module.exports = {
    roots: ['src'],
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: ['<rootDir>/testing/setup-jest.ts'],
    // Use html coverage report for CI output, use text reports for console.
    coverageReporters: ['html', 'text', 'text-summary']
};
