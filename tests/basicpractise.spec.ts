import {test, expect} from '@playwright/test'

test.describe("",()=>{
test(" @P1 @Regression basic practise file",async ({page})=>{

page.goto('https://testautomationpractice.blogspot.com/');
//const nameinput=page.getByRole('textbox',{name:'Name:'})
//await nameinput.fill('Aravind');
await page.getByRole('textbox', { name: 'Enter Name' }).fill('1232');
await page.getByPlaceholder('Enter EMail',{exact:true}).fill('emailid123');
const phone=page.locator('#phone')
await phone.fill('phone1234');
const radiobox= page.getByLabel('Male',{exact:true});
await radiobox.check();
const checkbox=page.getByText('Sunday');
await checkbox.check();

await page.waitForTimeout(5000);

});

test("@P1 @Regression dropdown",async ({page})=>{
page.goto('https://testautomationpractice.blogspot.com/');
const dropddown1=page.locator('select#country');
dropddown1.selectOption({value:'germany'})
await page.waitForTimeout(5000);
dropddown1.selectOption({label:'Australia'})
await page.waitForTimeout(5000);
dropddown1.selectOption({index:7});
await page.waitForTimeout(5000);

// multiselect
/*
dropddown1.selectOption([
{value:'option1'},
{ value:'option2'},
{index:1}
    
])
*/
const alloptions=dropddown1.locator('option')
const count=await alloptions.count();
console.log(count);
 const arrayoptions= await alloptions.allTextContents();
 const trimeed=arrayoptions.map((value)=>{

    return value.trim();
 })
 console.log(arrayoptions);
 console.log(trimeed);
 const array2=await alloptions.all();
});
})

test.describe('',()=>{




test.skip("@p2 @sanity dropdwon2",async ({page})=>{

    page.goto('https://demoqa.com/select-menu');
    
    const dropownmul=page.getByText('Multiselect drop down');
    await expect(dropownmul).toBeVisible({timeout:1000});


await expect.soft(dropownmul).toBeVisible();

    const dropddowndivexpand=page.locator('.css-8mmkcg').nth(2);
    await dropddowndivexpand.click();

   const options=page.locator("div[role='listbox'] div");
   const count= await options.count();
   console.log(count);
   const dedioption=options.filter({hasText:'Blue'});
   await dedioption.click()


})

test("@p2 @sanity sds",async ({page})=>{


    page.goto('https://testautomationpractice.blogspot.com/')
    page.getByRole('link',{name:'Udemy Courses'}).click();

    await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/#udemy');
    page.goBack();
})
})