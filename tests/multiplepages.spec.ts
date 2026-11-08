import {test , expect} from '@playwright/test'

import fs from 'fs';

test("multiple file handle ",async({browser})=>{

const context1= await browser.newContext();
const page=await context1.newPage();

await page.goto('https://sdetqa.vercel.app/autoplay')

const text=page.getByText('AutoPlay')
await expect(text).toContainText('AutoPlay');


const [newtab]=await Promise.all(

    [
        context1.waitForEvent('page') ,
        
     page.getByRole('button',{name:'New Tab',exact:true}).click()

    ]
)
await  newtab.waitForURL('https://playwright.dev/')

await newtab.waitForLoadState('load');

const textdata= newtab.getByText('Playwright CLI',{exact:true})

await newtab.waitForTimeout(5000)

})

test("file uplaod ", async({page})=>{

await page.goto('https://sdetqa.vercel.app/autoplay')


const fileupload=page.locator('#singleFileInput')

const fileuplaodbutton=page.getByText('Upload Single File')

await fileupload.setInputFiles(['FileUpload/Framework-Step-By-Step.pdf']);

await page.waitForTimeout(5000);

await fileuplaodbutton.click();


const message=page.locator('#singleFileStatus');
await message.waitFor({state:'visible'});
await expect(message).toContainText('Single file selected');
//await page.waitForTimeout(5000);

})


test("file download",async ({page})=>{

await page.goto('https://sdetqa.vercel.app/autoplay');

const [downloadfile]= await Promise.all(
[
page.waitForEvent('download'),
page.getByRole('button',{name:' Download File'}).click()

 ]
)

const stringdata=downloadfile.suggestedFilename();
console.log(stringdata);

await downloadfile.saveAs(`download/${downloadfile.suggestedFilename()}`);
const downloadpath=`download/${downloadfile.suggestedFilename()}`;


const fileExists=fs.existsSync(downloadpath);
 expect(fileExists).toContainText(true);
 


})