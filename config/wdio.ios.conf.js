const path = require ('path')
import { config } from '../wdio.conf.js';

  
config.port = 4723,

config.specs= [
        './test/specs/ios/ios.spec.js'
    ];

config.capabilities=[ {
        'appium:platformName': 'ios',
        'appium:deviceName': 'iPhone 16 Plus',
        'appium:platformVersion': '18.4',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
        "browserName": "Safari",
        "noReset": true
    }]    

export { config };