const puppeteer = require('puppeteer');

async function example () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://mw.emao.com/login')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  await navigationPromise

  console.log(1, '输入账号密码')
  await page.waitForSelector('#app > .login-container > .el-form > .username > .el-form-item__content input')
  await page.click('#app > .login-container > .el-form > .username > .el-form-item__content input')
  await page.keyboard.type('13912345678')
  
  await page.waitForSelector('#app > .login-container > .el-form > .password > .el-form-item__content input')
  await page.click('#app > .login-container > .el-form > .password > .el-form-item__content input')
  await page.keyboard.type('13912345678')

  console.log(2, '登录成功')
  await page.waitForSelector('body > #app > .login-container > .el-form > .el-button')
  await page.click('body > #app > .login-container > .el-form > .el-button')
  
  console.log(3, '点击人员管理按钮')
  await page.waitForSelector('.el-scrollbar__view > .second-wrapper > .el-submenu > .el-menu > .el-menu-item:nth-child(3)')
  await page.click('.el-scrollbar__view > .second-wrapper > .el-submenu > .el-menu > .el-menu-item:nth-child(3)')

  console.log(4, '点击新建人员按钮')
  await page.waitForSelector('div > div > a > .el-button > span')
  await page.click('div > div > a > .el-button > span')

  console.log(5, '输入员工姓名')
  await page.waitForSelector('.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
  await page.keyboard.type('recoluan')
  
  console.log(6, '输入手机号')
  await page.waitForSelector('.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
  await page.keyboard.type('17611261610')
  
  console.log(7, '输入邮箱')
  await page.waitForSelector('.el-form > .el-form-item:nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
  await page.click('.el-form > .el-form-item:nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
  await page.keyboard.type('recoluan@qq.com')

  
  setTimeout(async () => {
    console.log(8, '选择归属部门')
    await page.waitForSelector('.el-form-item:nth-child(4) > .el-form-item__content > .el-select > .el-input > .el-input__inner')
    await page.click('.el-form-item:nth-child(4) > .el-form-item__content > .el-select > .el-input > .el-input__inner')

    setTimeout(async () => {
      console.log('---------1-------')
      await page.waitForSelector('body > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item:nth-child(1) > span')
      console.log('---------2-------')
      await page.click('body > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .el-select-dropdown__item:nth-child(1) > span')
      console.log('---------3-------')
    }, 1000)
    
  }, 2000)
  
  setTimeout(async () => {
    console.log(9, '等待搜索成功后进行截图，并关闭程序')
    await page.screenshot({path: 'example.png'});
    await browser.close()
  }, 4000)
}

module.exports = example