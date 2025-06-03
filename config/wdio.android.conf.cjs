const path = require('path');
const { config } = require('../wdio.conf.js');

config.port = 4723;
config.specs = [
    path.join(process.cwd(), 'test/specs/android/**/*.js')
];
config.capabilities = [{
    'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel_4',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
    'appium:autoGrantPermissions': true
}];

module.exports = { config };