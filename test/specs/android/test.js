describe("colournote apk", () => {
    it("test", async () => {
        await driver.pause(3000);
        // Try to click the "Skip" button if it exists
        const skipBtn = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        if (await skipBtn.isDisplayed()) {
            await skipBtn.click();
        }
        await driver.pause(2000); // wait for main screen
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
        // Click on the "+" button to add a note
        const addBtn = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]');
        await addBtn.click();
        await driver.pause(2000);
        //await driver.pause(2000);
        await $('//*[@text="Text"]').click()
        await driver.pause(2000);
        await expect($('//*[@text="Editing"]')).toBeDisplayed()
        await driver.pause(2000);
        const noteValue= await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        await noteValue.setValue('android mobiles')
        const noteWrite= await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        await noteWrite.setValue('Pixel\nSamsung\nRedmi')
        await driver.pause(3000)
        await driver.back()
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Pixel\nSamsung\nRedmi")

    });
});
