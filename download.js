const process = require('./process')

process(
  'https://www.maccosmetics.com/media/export/cms/products/600x600/mac_sku_S7YM10_600x600_0.jpg',
  (err, data) => {
    if (err) {
      console.error(err)
    }
    console.log(data)
  }
)
