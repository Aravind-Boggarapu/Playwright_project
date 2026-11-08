# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basicpractise.spec.ts >> @p2 @sanity sds
- Location: tests\basicpractise.spec.ts:82:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.pavanonlinetrainings.com/#udemy"
Received: "https://testautomationpractice.blogspot.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for "https://testautomationpractice.blogspot.com/" navigation to finish...
    - navigated to "https://testautomationpractice.blogspot.com/"
    7 × locator resolved to <html dir="ltr" lang="en" class="v2">…</html>
      - unexpected value "https://testautomationpractice.blogspot.com/"

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row
  - rowgroup
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Udemy Courses' })
    - waiting for "https://testautomationpractice.blogspot.com/" navigation to finish...
    - navigated to "https://testautomationpractice.blogspot.com/"
    - locator resolved to <a href="https://www.pavanonlinetrainings.com/#udemy">Udemy Courses</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

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
  85 |     page.goto('https://testautomationpractice.blogspot.com/')
> 86 |     page.getByRole('link',{name:'Udemy Courses'}).click();
     |                                                   ^ Error: locator.click: Test ended.
  87 | 
  88 |     await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/#udemy');
  89 |     page.goBack();
  90 | })
  91 | })
```