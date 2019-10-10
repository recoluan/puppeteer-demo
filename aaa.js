const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://mw.emao.com/systemManage/departmentManage')
  
  await page.setViewport({ width: 1239, height: 969 })
  
  await navigationPromise
  
  await page.waitForSelector('.el-scrollbar__view > .second-wrapper > .el-submenu > .el-menu > .el-menu-item:nth-child(3)')
  await page.click('.el-scrollbar__view > .second-wrapper > .el-submenu > .el-menu > .el-menu-item:nth-child(3)')
  
  await page.waitForSelector('div > div > a > .el-button > span')
  await page.click('div > div > a > .el-button > span')
  
  await page.waitForSelector('.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-form > .el-form-item:nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-form-item:nth-child(4) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  await page.click('.el-form-item:nth-child(4) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .hover > span')
  await page.click('.el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .hover > span')
  
  await page.waitForSelector('.el-form-item:nth-child(5) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  await page.click('.el-form-item:nth-child(5) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-select-dropdown:nth-child(6) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item')
  await page.click('.el-select-dropdown:nth-child(6) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item')
  
  await page.waitForSelector('.el-form-item:nth-child(6) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  await page.click('.el-form-item:nth-child(6) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
  
  await page.waitForSelector('.el-select-dropdown:nth-child(7) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item > span')
  await page.click('.el-select-dropdown:nth-child(7) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item > span')
  
  await page.waitForSelector('.el-col:nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  await page.click('.el-col:nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  
  await page.waitForSelector('.el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .hover:nth-child(2) > span')
  await page.click('.el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .hover:nth-child(2) > span')
  
  await page.waitForSelector('.el-col:nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  await page.click('.el-col:nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  
  await page.waitForSelector('.el-select-dropdown:nth-child(9) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item:nth-child(1) > span')
  await page.click('.el-select-dropdown:nth-child(9) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item:nth-child(1) > span')
  
  await page.waitForSelector('.el-col:nth-child(5) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  await page.click('.el-col:nth-child(5) > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
  
  await page.waitForSelector('.el-select-dropdown:nth-child(10) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item > span')
  await page.click('.el-select-dropdown:nth-child(10) > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item > span')
  
  await page.waitForSelector('.el-form-item__content > .el-radio-group > .el-radio:nth-child(2) > .el-radio__input > .el-radio__inner')
  await page.click('.el-form-item__content > .el-radio-group > .el-radio:nth-child(2) > .el-radio__input > .el-radio__inner')
  
  await browser.close()
})()