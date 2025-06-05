// wdio.conf.js
const path = require('path');

exports.config = {
    hostname: 'localhost',
    runner: 'local',
    path: '/wd/hub',
    exclude: [],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
