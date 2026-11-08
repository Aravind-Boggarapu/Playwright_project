import { test , expect} from '@playwright/test'

test("sdsdfd",async ({page})=>{

await page.goto('https://www.hyrtutorials.com/p/frames-practice.html')

const frame=page.frameLocator('#frm1')
const dropdown =frame.locator('#selectnav1')

await dropdown.selectOption({label:'- SQL'})
await page.waitForTimeout(5000)
const sqlvideo=frame.locator('a[href="https://www.hyrtutorials.com/2019/03/sql-server-data-types-part-2.html"]')
// await expect(sqlvideo).toBeVisible()

const data=page.getByText('frameset - The <frameset> tag was used in HTML 4 to define a frameset.')

await expect(data).toBeVisible()

await expect(data).toContainText('frameset - The <frameset> tag was used in HTML')

const frame2=page.frameLocator('#frm2')
const dropdown2=frame2.locator('#selectnav1')
await dropdown2.selectOption({value:'https://www.hyrtutorials.com/search/label/TechNews'})
})

test("webtable",async({page})=>{
await page.goto('https://demoqa.com/webtables')
await page.waitForLoadState('load')
const table=page.locator('.web-tables-wrapper')

const tablerows= await table.locator('tbody tr').all()
const headers=table.locator('thead tr')

const data=[]

    const elementdata=await tablerows[1].locator('td').allTextContents()
     const elementdata1=await tablerows[0].locator('td').allTextContents()
    // console.log(elementdata)
    data.push(elementdata)
    data.push(elementdata1)



console.log(data)
})