import path from 'path';

export const config = {
    hostname: 'localhost',
    runner: 'local',
    port: 4723,
    path: '/wd/hub', 

    specs: [
        './test/specs/android/*.js'
    ],
    exclude: [],

    maxInstances: 10,

    capabilities: [{
    //     'appium:platformName': 'Android',
    //     // 'appium:deviceName': 'Android GoogleAPI Emulator',
    //     //'appium:deviceName': 'sumsung_s24',
    //     'appium:platformVersion': '16.0',
    //     'appium:automationName': 'UiAutomator2',
    //     // 'appium:app': path.join(process.cwd(), 'app/android/amazon-india-22-14-2-350.apk'),
    //     'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
    //    // 'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    //     'appium:autoGrantPermissions':true
    //  },
    // {
        'appium:platformName': 'Android',
        'appium:deviceName': 'sumsung_s24',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions':true
     },
    {
        'appium:platformName': 'ios',
        'appium:deviceName': 'iPhone 16 Plus',
        'appium:platformVersion': '18.4',
        'appium:automationName': 'XCUITest',
        //'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
        "browserName": "Safari"
        //"noReset": true
    }],

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