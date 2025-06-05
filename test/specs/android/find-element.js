describe('Find Element Test',()=>{
    it('find element test',async()=>{
     const appOption =await $('~App')
     await appOption.click()
     const assActionbar=await $('~Action Bar')
     await expect(assActionbar).toBeDisplayed()
    })
    it.skip('find the element by class name',async()=>{
     const className  =await $('android.widget.TextView')
     console.log('class name:',await className.getText())
     await expect(className).toBeDisplayed("API Demos")
    })
    xit('find the element by xpath',async()=>{
        //find by content-desc
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
    //find by resource-id
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
    // find by text
    await $('//android.widget.TextView[@text="Command two"]').click()
        // find by class name
        const expassion = await $('//android.widget.TextView')
        expect(expassion).toHaveText("You selected: 1 , Command two")
})
it('uiautomator',async()=>{
       const appOption =await $('~App')
     await appOption.click()
    await $('android=new UiSelector().textContains("Alert")').click()
})
it('Find the multiple Elements',async()=>{
    const expectResult=["API Demos", 
        "Access'ibility", 
        "Accessibility",
        "Animation",
        "App",
        "Content",
        "Graphics",
        "Media",
        "NFC",
        "OS",
        "Preference",
        "Text",
        "Views",
    ]
    const actualResult=[]


    const allElement=await $$('android.widget.TextView')
    //.log(allElement.getText()) this line come to fail error insted of this we can use loop

    for(const element of allElement){
        actualResult.push(await element.getText())

    }
    await expect(actualResult).toEqual(expectResult)
})
})

//test/specs/find-element.spec.js