// describe("Find the element test",()=>{
//     it('Alert views',async()=>{
//     await $('~Alert Views').click()
//          await $('~Simple').click()
//     await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
//     })
// })
describe('iOS Safari Browser Test', () => {
  it('should open Safari and navigate to Google', async () => {
    await driver.url('https://google.com');
    await driver.pause(3000);

    // const searchBox = await $('input[name="q"]');
    // await searchBox.setValue('Appium iOS Safari Test');
    // await driver.keys('Enter');

    await driver.pause(5000);
  });
});

