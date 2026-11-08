
import { test as base, Page} from '@playwright/test'

type myfixture={

    loggedin:Page
}

  export const test=base.extend<myfixture>({
    loggedin:async ({page},use)=>{

       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       const usernmae=page.locator('input[name="username"]')
       await usernmae.fill('Admin')
       const password=page.locator('input[name="password"]')
       await password.fill('admin123')
const button=page.getByRole('button', { name: 'Login' })
await button.click()
       await use(page) 

    }


  })

  export {expect} from '@playwright/test'