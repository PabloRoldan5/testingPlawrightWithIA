module.exports = {
  testDir: 'src/tests',
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry',
  },
  reporter: [['list'], ['html', { output: 'test-results/report.html' }]],
};