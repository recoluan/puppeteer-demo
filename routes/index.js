var express = require('express');
var router = express.Router();
var example = require('../puppeteer/example')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '一猫智能下单平台' });
});

router.get('/getInfo', function(req, res, next) {
  const data = [
    { title: '测试1', date: '2019-01-01 09:23:34' },
    { title: '测试2', date: '2019-01-01 09:23:35' },
    { title: '测试3', date: '2019-01-01 09:23:36' },
    { title: '测试4', date: '2019-01-01 09:23:37' },
  ]
  res.send({status: 200, msg: 'ok', data: data})
});

router.get('/handleOrder/:index', async function(req, res, next) {
  const index = req.params.index
  await example()
  res.send({status: 200, msg: 'ok', data: { index: index }})
});


module.exports = router;
