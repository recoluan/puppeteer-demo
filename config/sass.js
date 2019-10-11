var fs = require('fs');
var path = require('path');
var sass = require('node-sass');

// 处理 sass
function handleSass () {
  // 因为我的系统下文件改变会触发两次，所以需要控制奇数次可保存，偶数次不可以，实际到每个人电脑自行调节
  let canSave = true
  // 监听sass文件夹下文件变动，增添修改删除（这里没有做删除的相应处理）
  let watch = fs.watch(
    path.resolve('./public/sass'),
    function (type, filename) {
    // console.log('type: ', type, ' filename: ', filename)
  })
  // 触发change事件，文件改动，注意在不同系统中该行为可能有差异
  watch.on('change', function (type, filename) {
    // 这里做一个单次保存的处理，因为在我的系统中一次修改触发两次change
    if (canSave) { 
      saveCss(filename)
    }
    canSave = !canSave
  })
}

// 使用node-sass模块进行转换，后保存至css文件夹
function saveCss (filename) {
  let suffix = path.extname(filename) // 后缀名
  if (suffix !== '.scss') return
  let outputName = path.resolve('./public/styles/', path.basename(filename, suffix) + '.css')
  sass.render({
    file: path.resolve('./public/sass', filename),
    outFile: outputName,
    outputStyle: 'compressed',
    sourceMap: true
  }, function (err, result) {
    if (err) {
      console.log('sass render err -> ', err)
    } else {
      fs.writeFile(outputName, result.css, function(err){
        if (err) {
          console.log('write file err -> ', err)
        } else {
          console.log('save css success -> ', outputName)
        }
      });
    }
  })
}

module.exports = handleSass