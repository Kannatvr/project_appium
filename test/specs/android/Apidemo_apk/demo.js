describe('Android Native Test', () => {
    it('Access an activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(3000);
        const title = await $("//*[@text='App/Alert Dialogs']");
        await title.waitForDisplayed({ timeout: 10000 });
        await expect(title).toExist();
        await driver.pause(3000);

    //     // Click the button that opens the dialog
    //     const dialogBtn = await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');
    //     await dialogBtn.waitForDisplayed({ timeout: 10000 });
    //     await dialogBtn.click();

    //     // Wait for the alert title to confirm dialog is open
    //     const alertTitle = await $('//*[@resource-id="android:id/alertTitle"]');
    //     await alertTitle.waitForDisplayed({ timeout: 10000 });

    //     // Click the "OK" button
    //     const okBtn = await $('//*[@resource-id="android:id/button1"]');
    //     await okBtn.waitForDisplayed({ timeout: 10000 });
    //     await okBtn.click();

    //     // Verify the dialog is dismissed
    //     await expect(alertTitle).not.toBeDisplayed();

    //     // Go back to the main screen
    //     await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
    //     await driver.pause(2000);

    //     // Navigate to App > Activity
    //     const appBtn = await $('~App');
    //     await appBtn.waitForDisplayed({ timeout: 10000 });
    //     await appBtn.click();

    //     const activityBtn = await $('~Activity');
    //     await activityBtn.waitForDisplayed({ timeout: 10000 });
    //     await activityBtn.click();

    //     // Scroll to Secure Surfaces
    //     const secureSurfaces = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
    //     await secureSurfaces.waitForDisplayed({ timeout: 10000 });
    //     await secureSurfaces.click();
        
    //     const secureDialog = await $('~Secure Dialog');
    //     await secureDialog.waitForDisplayed({ timeout: 10000 });
    //     await expect(secureDialog).toExist();

    //     // Test Gallery scrolling
    //     const viewsBtn = await $('~Views');
    //     await viewsBtn.waitForDisplayed({ timeout: 10000 });
    //     await viewsBtn.click();

    //     const galleryBtn = await $('~Gallery');
    //     await galleryBtn.waitForDisplayed({ timeout: 10000 });
    //     await galleryBtn.click();

    //     const text1 = await $('//*[@resource-id="android:id/text1"]');
    //     await text1.waitForDisplayed({ timeout: 10000 });
    //     await text1.click();

    //     // Scroll forward and backward
    //     await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    //     await driver.pause(3000);
    //     await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

    //     // Test Date Widgets
    //     await viewsBtn.click();
        
    //     const dateWidgetsBtn = await $('~Date Widgets');
    //     await dateWidgetsBtn.waitForDisplayed({ timeout: 10000 });
    //     await dateWidgetsBtn.click();

    //     await text1.click();
        
    //     const dateElement = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    //     await dateElement.waitForDisplayed({ timeout: 10000 });
    //     const displayedDate = await dateElement.getText();

    //     // Extract just the date part from the displayed value
    //     const displayedDatePart = displayedDate.split(' ')[0];
    //     const today = new Date();
    //     const month = today.getMonth() + 1;
    //     const day = today.getDate();
    //     const year = today.getFullYear();
    //     const expectedDatePart = `${month}-${day}-${year}`;
    //     expect(displayedDatePart).toBe(expectedDatePart);

    //     // Test date change functionality
    //     const changeDateBtn = await $('~change the date');
    //     await changeDateBtn.waitForDisplayed({ timeout: 10000 });
    //     await changeDateBtn.click();
    //     await driver.pause(3000);

    //     // Access the date widget
    //     await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        
    //     // Get the current date
    //     const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    //     await date.waitForDisplayed({ timeout: 10000 });
    //     const currentDate = await date.getText();
        
    //     // Click on the change date button
    //     await changeDateBtn.click();
        
    //     // Scroll right to the next month
    //     await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    //     await driver.pause(3000);
        
    //     // Select 20th date
    //     const date20 = await $('//*[@text="20"]');
    //     await date20.waitForDisplayed({ timeout: 10000 });
    //     await date20.click();
        
    //     // Click on ok button
    //     const okButton = await $('//*[@resource-id="android:id/button1"]');
    //     await okButton.waitForDisplayed({ timeout: 10000 });
    //     await okButton.click();
        
    //     // Verify the updated date
    //     await expect(await date.getText()).not.toEqual(currentDate);
    
});
});

