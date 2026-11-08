import {test, expect}  from '@playwright/test'

test(" dynamic waits concept",async({page})=>{


page.goto('https://www.flipkart.com/')

const fashion=page.locator('a[href="/ss-26-base-inline-at-store"]')
await fashion.click()
 //await page.waitForURL(///www.flipkart.com/ss-26-base-inline-a.*/ ,{waitUntil:'load'})
    await page.waitForURL(/https:\/\/www\.flipkart\.com\/ss-26-base-inline-at\/?.*/, { waitUntil: 'load' });


 const text=page.getByText('Shop for loved ones')
 await expect(text).toBeVisible()

 const screeshot=await page.screenshot(

    {path:'screenshots/Fashion1.png',
        fullPage:true
    }
 )

})