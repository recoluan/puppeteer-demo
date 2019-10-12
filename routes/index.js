var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '一猫智能下单平台' });
});

router.get('/getInfo/:key', function(req, res, next) {
  const { key } = req.params
  console.log(`选择的是${key}`)
  const data = [
    { title: '测试1', date: '2019-01-01 09:23:34' },
    { title: '测试2', date: '2019-01-01 09:23:35' },
    { title: '测试3', date: '2019-01-01 09:23:36' },
    { title: '测试4', date: '2019-01-01 09:23:37' },
  ]
  res.send({status: 200, msg: 'ok', data: data})
});

router.get('/handleOrder/:index/:key', async function(req, res, next) {
  const { index, key } = req.params
  var example = await require(`../puppeteer/${key}`)
  console.log(example)
  await example()
  res.send({status: 200, msg: 'ok', data: { index: index }})
});


module.exports = router;
