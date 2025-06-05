describe('First exe',()=>{
    it('API Demos in side click in view',async()=>{
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $ ('//android.widget.TextView[@content-desc="1. Screen Top"]').click();

        //enter the country name

        const textFiled=await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textFiled.addValue('Canada')
        await expect(textFiled).toHaveText('Canada')
    }) 
    it('google chorme open',async()=>{
        await driver.pressKeyCode(3); 
        await driver.pause(2000);
        const element = await $('android=new UiSelector().resourceId("com.google.android.apps.nexuslauncher:id/overview_actions_view")');
        await element.click()

    }) 
})