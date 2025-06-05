import login from '../../../screenobject/android/fblogin.js'; 


describe('Facebook Login Test', () => {
    before(async () => {
        // Put any browser-level setup here if needed
    });

    it('should launch the Chrome app', async () => {
        await login.launchChrome.click();
        const textFiled=await login.Textfild
        await textFiled.addValue('facebook.com')
        await $()

    });
});
