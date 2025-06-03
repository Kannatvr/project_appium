import path from 'path';

export const config = {
    hostname: 'localhost',
    runner: 'local',
    port: 4723,
    path: '/wd/hub', 

//'./test/specs/android/*.js'
    specs: [
        './test/specs/ios/*.js'
     
    ],
    exclude: [],

    maxInstances: 10,

    capabilities: [
     {
        'appium:platformName': 'ios',
        'appium:deviceName': 'iPhone 16 Plus',
        'appium:platformVersion': '18.4',
        'appium:automationName': 'XCUITest',
        //'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
        "browserName": "Safari"
        //"noReset": true
    }
    ],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,

    services: ['appium'],

    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};