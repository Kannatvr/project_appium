describe('Android Native Test',()=>{
    it('Access an activity directly',async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(3000)
        await expect($("//*[@text='App/Alert Dialogs']")).toExist()   
    })
    it('working on dialong button ',async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(3000)
        //click the first alert button
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        //accept alert
        //await driver.accpetAlert()
        await dialog.accept()

        await expect($("//*[@resource-id='android:id/alertTitle']")).not.toExist()

    })
    it('working on dialog button', async () => {
    // Launch the AlertDialogSamples activity directly
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    // Click the button that opens the dialog
    const dialogBtn = await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');
    //await dialogBtn.waitForDisplayed({ timeout: 5000 });
    await dialogBtn.click();

    // Wait for the alert title to confirm dialog is open
    const alertTitle = await $('//*[@resource-id="android:id/alertTitle"]');
    await alertTitle.waitForDisplayed({ timeout: 5000 });

    // Click the "OK" button (this is not a native alert button, just a regular view)
    const okBtn = await $('//*[@resource-id="android:id/button1"]');
    //await okBtn.waitForDisplayed({ timeout: 3000 });
    await okBtn.click();

    // Verify the dialog is dismissed
    await expect(alertTitle).not.toBeDisplayed();
    });
    it('vertical scrolling',async()=>{
    await $('~App').click()
    await $('~Activity').click()

    //scroll to the end
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
   // await $('~Secure Surfaces').click()
     await expect($('~Secure Dialog')).toExist()
    })
    it('Horizontal Scrolling',async()=>{
    await $('~Views').click()
    await $('~Gallery').click()
    await $('//*[@resource-id="android:id/text1"]').click()
    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await driver.pause(3000)
    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    })
    it('Date select on clander',async()=>{
        await $('~Views').click()
        await $('~Date Widgets').click()
        await $('//*[@resource-id="android:id/text1"]').click()
        const dateElement=await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const displayedDate = await dateElement.getText();
       // console.log(await driver.getPageSource());

            // Extract just the date part from the displayed value
            const displayedDatePart = displayedDate.split(' ')[0]; // "5-26-2025"
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            const year = today.getFullYear();
            const expectedDatePart = `${month}-${day}-${year}`;
            expect(displayedDatePart).toBe(expectedDatePart);  
        await $('~change the date').click()   
        await driver.pause(3000) 
        // Scroll to year
        //await $('android=new UiScrollable(new UiSelector().resourceId("io.appium.android.apis:id/pickDate")).scrollTextIntoView("2026")');

      //  await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("June 2025")');
       //await $('android=new UiSelector().text("2026")').click();
        //await $('~Next month').click()    
        //await $('~11 July 2025').click()    
    })
    it("navigate to datepicker and change the date",async()=>{
        //access the date widget
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
        //get the current date 
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate= await date.getText()
        //ckick on the change date button
        await $('~change the date').click()
        //scroll right to the next month
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000)
        // select 20th date 
        await $('//*[@text="20"]').click()
        //click on ok button
        await $('//*[@resource-id="android:id/button1"]').click()
        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate)    
    })
})

