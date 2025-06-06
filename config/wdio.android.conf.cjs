const path = require('path');
const baseConfig = require('./wdio.conf.cjs');

const config = {
    ...baseConfig.config,
    port: 4723,
    specs: [
        path.join(process.cwd(), 'test/specs/android/**/*.js')
    ],
    
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_4',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
        // 'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }]
};

module.exports = { config };
