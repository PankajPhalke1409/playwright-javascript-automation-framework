//const {test, expect} = require('@playwright/test');
import{ test, expect } from '@playwright/test';

test('locatemultipleelements', async ({page})=>{

    //launch web application
    await page.goto('https://www.demoblaze.com/index.html')

    /*//capture all the links available in web page
    const links = await page.$$('a');

    for(const link of links)
    {
      const linktext = await link.textContent();
      console.log(linktext);
    }*/

      //similarly capture the products from the home page
      //sometimes we need to need below command
      //sometime not loaded content then only we need it
      //this command is wait till all the product display in web page
      await page.waitForSelector("//div[@id='tbodyid']//div//h4/a",{ state: 'visible', timeout: 20000 });

      const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

      for(const product of products)
      {
        const productname = await product.textContent();
        console.log(productname);
      }
})