# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basicpractise.spec.ts >> @p2 @sanity sds
- Location: tests\basicpractise.spec.ts:82:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe("",()=>{
  4  | test(" @P1 @Regression basic practise file",async ({page})=>{
  5  | 
  6  | page.goto('https://testautomationpractice.blogspot.com/');
  7  | //const nameinput=page.getByRole('textbox',{name:'Name:'})
  8  | //await nameinput.fill('Aravind');
  9  | await page.getByRole('textbox', { name: 'Enter Name' }).fill('1232');
  10 | await page.getByPlaceholder('Enter EMail',{exact:true}).fill('emailid123');
  11 | const phone=page.locator('#phone')
  12 | await phone.fill('phone1234');
  13 | const radiobox= page.getByLabel('Male',{exact:true});
  14 | await radiobox.check();
  15 | const checkbox=page.getByText('Sunday');
  16 | await checkbox.check();
  17 | 
  18 | await page.waitForTimeout(5000);
  19 | 
  20 | });
  21 | 
  22 | test("@P1 @Regression dropdown",async ({page})=>{
  23 | page.goto('https://testautomationpractice.blogspot.com/');
  24 | const dropddown1=page.locator('select#country');
  25 | dropddown1.selectOption({value:'germany'})
  26 | await page.waitForTimeout(5000);
  27 | dropddown1.selectOption({label:'Australia'})
  28 | await page.waitForTimeout(5000);
  29 | dropddown1.selectOption({index:7});
  30 | await page.waitForTimeout(5000);
  31 | 
  32 | // multiselect
  33 | /*
  34 | dropddown1.selectOption([
  35 | {value:'option1'},
  36 | { value:'option2'},
  37 | {index:1}
  38 |     
  39 | ])
  40 | */
  41 | const alloptions=dropddown1.locator('option')
  42 | const count=await alloptions.count();
  43 | console.log(count);
  44 |  const arrayoptions= await alloptions.allTextContents();
  45 |  const trimeed=arrayoptions.map((value)=>{
  46 | 
  47 |     return value.trim();
  48 |  })
  49 |  console.log(arrayoptions);
  50 |  console.log(trimeed);
  51 |  const array2=await alloptions.all();
  52 | });
  53 | })
  54 | 
  55 | test.describe('',()=>{
  56 | 
  57 | 
  58 | 
  59 | 
  60 | test.skip("@p2 @sanity dropdwon2",async ({page})=>{
  61 | 
  62 |     page.goto('https://demoqa.com/select-menu');
  63 |     
  64 |     const dropownmul=page.getByText('Multiselect drop down');
  65 |     await expect(dropownmul).toBeVisible({timeout:1000});
  66 | 
  67 | 
  68 | await expect.soft(dropownmul).toBeVisible();
  69 | 
  70 |     const dropddowndivexpand=page.locator('.css-8mmkcg').nth(2);
  71 |     await dropddowndivexpand.click();
  72 | 
  73 |    const options=page.locator("div[role='listbox'] div");
  74 |    const count= await options.count();
  75 |    console.log(count);
  76 |    const dedioption=options.filter({hasText:'Blue'});
  77 |    await dedioption.click()
  78 | 
  79 | 
  80 | })
  81 | 
  82 | test("@p2 @sanity sds",async ({page})=>{
  83 | 
  84 | 
> 85 |     page.goto('https://testautomationpractice.blogspot.com/')
     |          ^ Error: page.goto: Test ended.
  86 |     page.getByRole('link',{name:'Udemy Courses'}).click();
  87 | 
  88 |     await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/#udemy');
  89 |     page.goBack();
  90 | })
  91 | })
```