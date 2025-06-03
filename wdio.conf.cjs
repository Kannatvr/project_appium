// const path = require('path');

// exports.config = {
//   runner: 'local',
//   maxInstances: 2,
//   specs: ['./test/specs/**/*.js'],

//   capabilities: [
//   {
//     'appium:platformName': 'Android',
//     'appium:deviceName': 'Pixel_3',
//     'appium:udid': 'emulator-5554',
//     'appium:platformVersion': '16',
//     'appium:automationName': 'UiAutomator2',
//     'appium:systemPort': 8200,
//     'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
//     'appium:autoGrantPermissions': true,
//     port: 4723 // this points to the Appium server for this device
//   },
//   {
//     'appium:platformName': 'Android',
//     'appium:deviceName': 'Pixel_4',
//     'appium:udid': 'emulator-5556',
//     'appium:platformVersion': '16',
//     'appium:automationName': 'UiAutomator2',
//     'appium:systemPort': 8201,
//     'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
//     'appium:autoGrantPermissions': true,
//     port: 4725 // this points to the second Appium server
//   }
// ],


//   // capabilities: [
//   //   {
//   //     'appium:platformName': 'Android',
//   //     'appium:deviceName': 'Pixel_3',
//   //     'appium:platformVersion': '16.0',
//   //     'appium:automationName': 'UiAutomator2',
//   //     'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
//   //     'appium:autoGrantPermissions': true
//   //   },
//   //   {
//   //     'appium:platformName': 'Android',
//   //     'appium:deviceName': 'Pixel_4',
//   //     'appium:platformVersion': '16.0',
//   //     'appium:automationName': 'UiAutomator2',
//   //     'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
//   //     'appium:autoGrantPermissions': true
//   //   }
//   // ],

//   //services: ['appium'],
//   framework: 'mocha',
//   reporters: ['spec'],
//   mochaOpts: {
//     timeout: 60000
//   }
// }
//------------------------------
const path = require('path');

exports.config = {
  runner: 'local',
  maxInstances: 2,
  specs: ['./test/specs/**/*.js'],

  capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:deviceName': 'Pixel_3',
      'appium:udid': 'emulator-5554',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:systemPort': 8200,
      'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
      'appium:autoGrantPermissions': true,
      port: 4723,
      path: '/wd/hub',
      hostname: 'localhost'
    },
    {
      'appium:platformName': 'Android',
      'appium:deviceName': 'Pixel_4',
      'appium:udid': 'emulator-5556',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:systemPort': 8201,
      'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
      'appium:autoGrantPermissions': true,
      port: 4725,
      path: '/wd/hub',
      hostname: 'localhost'
    }, {
      'appium:platformName': 'Android',
      'appium:deviceName': 'Pixel_9_Pro',
      'appium:udid': 'emulator-5558',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:systemPort': 8202,
      'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
      'appium:autoGrantPermissions': true,
      port: 4727,
      path: '/wd/hub',
      hostname: 'localhost'
    }
  ],

  // ❌ Don't use Appium service if running multiple servers manually
  // services: ['appium'],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 60000
  }
};
