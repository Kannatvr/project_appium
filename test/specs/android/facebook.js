describe('navigate Homescreen ',()=>{
    it('lanch facebook in chrome',async()=>{
       await driver.pressKeyCode(3)
        await $('~Chrome').click()
       const textFiled=await $('//*[@resource-id="com.android.chrome:id/search_box_text"]')
       await textFiled.addValue('facebook.com')
       await driver.pressKeyCode(66)
        await driver.pause(2000)
        const uname=await $('//*[@resource-id="m_login_email"]')
        await uname.addValue('pankaj')
        const password=await $('//*[@resource-id="m_login_password"]')
        await password.addValue('kumar')
        await $('//*[@text="Log in"]').click()
        await driver.pause(2000)
       // await $('android=new UiSelector().textContains("Try Again")').click();
        const element = await $('//*[@text="Incorrect password"]');
        const exists = await element.isExisting();
        console.log(`Popup exists: ${exists}`); // true or false
    })
})