describe('checklist for june seventh',()=>{
    it('Tour check list',async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await driver.pause(2000);
        await $('//*[@text="Calendar"]').click()
        await driver.pause(2000);
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/add"]').click()
        
    })
})