const monq = require('monq')

const client = monq('mongodb://localhost:27017/monq_example')

const queue = client.queue('img')

queue.enqueue(
  'process',
  'https://www.maccosmetics.com/media/export/cms/products/600x600/mac_sku_S7YM10_600x600_0.jpg',
  (err, job) => {
    if (err) throw err
    console.log('Enqueued', job.data)
    process.exit()
  }
)
