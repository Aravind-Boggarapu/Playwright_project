import { test, expect} from '@playwright/test'

test("practise",async ({page})=>{
page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//const username=page.getByRole('button',{name:'username'})
const username=page.locator('input[name="username"]')

await username.fill('Admin')
//const password=page.getByPlaceholder('Password')
const password=page.locator('input[name="password"]')
await password.fill('admin123')

const submitbutton= page.getByRole('button',{name:'Login'})
await submitbutton.click()

await expect(page.getByRole('button',{name:' Upgrade'})).toBeVisible()

const pim=page.getByRole('link',{name:'PIM'})
//await expect(pim).toBeVisible()
await pim.click()

await expect(page.getByRole('heading',{name:'PIM'})).toBeVisible()
 const dropdown=page.locator('.oxd-select-text-input').nth(2)

await  dropdown.click()


 const dropdownlist=page.locator('.oxd-select-option')

 // page.waitForSelector('.oxd-select-option')  -- not recommended
 

 await dropdownlist.filter({hasText:'Automaton Tester'}).waitFor({state:'visible'})
 const values= await dropdownlist.allTextContents()
 console.log(values)
 await dropdownlist.last().click()
 








})

test("alerts",async({page})=>{

    await page.goto('https://vinothqaacademy.com/alert-and-popup/')

    page.on('dialog',(dialog)=>{

   expect(dialog.type()).toBe('alert')
    dialog.accept()

    })
    
    await page.getByRole('button',{name:'Alert Box'}).first().click()
    page.waitForTimeout(5000)

    
})

test("alerts1",async({page})=>{

await page.goto('https://vinothqaacademy.com/alert-and-popup/')
page.on('dialog',(dialog)=>{

     
        if(dialog.type()==='confirm')
        {
            dialog.dismiss()

        }

    })
    await page.getByRole('button',{name:'Confirm Alert Box'}).click()

    await expect(page.getByText('You clicked on Cancel!')).toBeVisible()



})

test("alerts2",async({page})=>{

await page.goto('https://vinothqaacademy.com/alert-and-popup/')
page.on('dialog',(dialog)=>{

     
        if(dialog.type()==='prompt')
        {
             dialog.accept('aravind')

        }

    })
    await page.getByRole('button',{name:'Prompt Alert Box'}).click()

    await expect(page.getByText('Sad to hear it !')).toBeVisible()



})

test("tabs",async({browser})=>{


    const context= await browser.newContext()
    const page=await context.newPage()


    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')

    
const [newpage]=await Promise.all( [

await context.waitForEvent('page'),
await page.locator('#newWindowBtn').click()




])
await newpage.waitForLoadState('load')
await newpage.getByRole('textbox',{name:'First Name'}).fill('aravind')

    
  
    
})