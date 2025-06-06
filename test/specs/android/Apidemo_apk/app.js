import { $ } from "@wdio/globals"
describe('api demo apllication',()=>{
    it("app test",async()=>{
        await $('~App').click()
        await $('~Action Bar').click()
        await $('~Action Provider').click()
        await $('~Settings Action Provider').click()
        await driver.pause(1000)
        await $('//*[@resource-id="io.appium.android.apis:id/button"]').click()
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        // await expect ($('//*[@text="Accessibility"]')).toExist()
        // await driver.pause(4000)
        //await $('//*[@text="Accessibility"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        //await $('//*[@text="Flash notifications"]').click()
       // await $('//*[@resource-id="com.android.settings:id/switchWidget"]').click()
        await driver.pause(2000)
        // await $('//*[@text="Preview"]').click()
        await driver.pressKeyCode(3)
        await driver.pressKeyCode(4)
        // await driver.pause(2000)
        
        // await driver.pause(2000)
        // await swipeUp()
    
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Clock")');


    })
})