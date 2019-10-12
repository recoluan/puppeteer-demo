const puppeteer = require('puppeteer');

async function example () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  console.log(1, '进入百度页面')
  await page.goto('https://www.baidu.com/')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  console.log(2, '输入框获取焦点')
  await page.waitForSelector('.s_form #kw')
  await page.click('.s_form #kw')

  console.log(3, '输入搜索内容')
  await page.keyboard.type('vuepress reco')
  
  console.log(4, '点击搜索按钮')
  await page.waitForSelector('.s_form #su')
  await page.click('.s_form #su')


  console.log(5, '开始搜索')
  setTimeout(async () => {
    console.log(6, '等待搜索成功后进行截图，并关闭程序')
    await page.screenshot({path: 'example.png'});
    await browser.close()
  }, 2000)
}
module.exports = example