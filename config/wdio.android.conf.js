const path = require ('path')
const { config } = require('./wdio.conf')
  
config.port = 4723,
config.specs= [
        './test/specs/android/*.js'
    ];

config.capabilities=[ {
       'appium:platformName': 'Android',
        'appium:deviceName': 'sumsung_s24',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
        'appium:autoGrantPermissions':true
    }]    

exports.config=config;