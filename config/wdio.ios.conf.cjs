const path = require('path');
const baseConfig = require('./wdio.conf.cjs');

const config = {
    ...baseConfig.config,
    port: 4723,
    specs: [
        path.join(process.cwd(), 'test/specs/ios/ios.spec.js')
    ],
    capabilities: [{
        'appium:platformName': 'ios',
        'appium:deviceName': 'iPhone 16 Plus',
        'appium:platformVersion': '18.4',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
        'appium:options': {
            'noReset': true
        },
        "browserName": "Safari"
    }]
};

module.exports = { config };