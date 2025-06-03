describe('amazon lanch',()=>{
    it('testfile',async()=>{
        await $('~Predicted app: Amazon Shopping').click()
        const searchBox = await $('//*[@resource-id="nav-search-keywords"]');
        await searchBox.click();
        await searchBox.addValue('iphone 16 pro');
        await $('//*[@text="Go"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,3)')
        await driver.pressKeyCode(3)
        await $('~Phone').click()
        await $('~key pad').click()
        await driver.pressKeyCode(16)
        await driver.pressKeyCode(15)
        await driver.pressKeyCode(14)
        await driver.pressKeyCode(13)
        await driver.pressKeyCode(12)
        await driver.pressKeyCode(11)

    })
})