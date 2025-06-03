describe('Simple Phone Dialer Test', () => {
    it('should dial a phone number', async () => {
        // Step 1: Go to home screen
        await driver.pressKeyCode(3); // Home button
        await driver.pause(2000);

        // Step 2: Open Phone app
        const phoneApp = await $('android=new UiSelector().text("Phone")');
        await phoneApp.click();
        await driver.pause(2000);

        // Step 3: Click on Keypad
        const keypad = await $('android=new UiSelector().text("Keypad")');
        await keypad.click();
        await driver.pause(2000);

        // Step 4: Enter phone number
        const number = '123456789';
        for (let digit of number) {
            const button = await $('android=new UiSelector().text("' + digit + '")');
            await button.click();
            await driver.pause(500);
        }

        // Step 5: Click Call button
        const callButton = await $('android=new UiSelector().text("Call")');
        await callButton.click();
        await driver.pause(5000);
    });
}); 