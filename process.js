const request = require('request')
const fs = require('fs')
const path = require('path')

module.exports = function(url, callback) {
  console.log('Running process img')
  try {
    request(url).pipe(
      fs
        .createWriteStream(path.resolve(__dirname, `img${Math.random()}.jpeg`))
        .on('close', callback)
    )
  } catch (error) {
    callback(error)
  }
}
