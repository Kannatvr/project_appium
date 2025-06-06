describe('Android Native Test',()=>{
    it('vertical scrolling',async()=>{
        // Wait for App menu and click
        await $('~App').waitForDisplayed({ timeout: 10000 });
        await $('~App').click();
        
        // Wait for Activity menu and click
        await $('~Activity').waitForDisplayed({ timeout: 10000 });
        await $('~Activity').click();
        
        // Scroll to Secure Surfaces
        const secureSurfaces = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
        await secureSurfaces.waitForDisplayed({ timeout: 10000 });
        await secureSurfaces.click();
        
        // Verify Secure Dialog exists
        await expect($('~Secure Dialog')).toExist();
        await driver.pause(2000);
        
        // Navigate back
        await driver.pressKeyCode(4);
        await driver.pause(1000);
        await driver.pressKeyCode(4);
        await driver.pause(1000);
        await driver.pressKeyCode(4);
    });

    it('Horizontal Scrolling',async()=>{
        // Wait for Views menu and click
        await $('~Views').waitForDisplayed({ timeout: 10000 });
        await $('~Views').click();
        
        // Wait for Gallery menu and click
        await $('~Gallery').waitForDisplayed({ timeout: 10000 });
        await $('~Gallery').click();
        
        // Wait for text1 element and click
        const text1 = await $('//*[@resource-id="android:id/text1"]');
        await text1.waitForDisplayed({ timeout: 10000 });
        await text1.click();
        
        // Scroll forward
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(2000);
        
        // Scroll backward
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(2000);
        
        // Press enter
        await driver.pressKeyCode(66);
        await driver.pressKeyCode(4);
        await driver.pressKeyCode(4);
    });
});