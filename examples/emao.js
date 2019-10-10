const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://mw.emao.com/login')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  await navigationPromise

  await page.waitForSelector('#app > .login-container > .el-form > .username > .el-form-item__content input')
  await page.click('#app > .login-container > .el-form > .username > .el-form-item__content input')
  await page.keyboard.type('13912345678')
  
  await page.waitForSelector('#app > .login-container > .el-form > .password > .el-form-item__content input')
  await page.click('#app > .login-container > .el-form > .password > .el-form-item__content input')
  await page.keyboard.type('13912345678')
  
  await page.waitForSelector('body > #app > .login-container > .el-form > .el-button')
  await page.click('body > #app > .login-container > .el-form > .el-button')

  await page.waitForSelector('.flex-wrapper > .right-menu > .avatar-container > .el-dropdown-selfdefine > span')
  await page.click('.flex-wrapper > .right-menu > .avatar-container > .el-dropdown-selfdefine > span')
  
  setTimeout(async () => {
    console.log(5, '加载')
    await page.waitForSelector('body > .el-dropdown-menu > a > .el-dropdown-menu__item')
    await page.click('body > .el-dropdown-menu > a > .el-dropdown-menu__item')
  }, 2000)
  
  setTimeout(async () => {
    console.log(6, '等待搜索成功后进行截图，并关闭程序')
    await page.screenshot({path: 'example.png'});
    await browser.close()
  }, 4000)
})()