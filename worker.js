const monq = require('monq')
const client = monq('mongodb://localhost:27017/monq_example')

const worker = client.worker(['img'])

worker.register({
  process: require('./process')
})

worker.on('dequeued', function(data) {
  console.log('Dequeued:')
  console.log(data)
})

worker.on('failed', function(data) {
  console.log('Failed:')
  console.log(data)
})

worker.on('complete', function(data) {
  console.log('Complete:')
  console.log(data)
})

worker.on('error', function(err) {
  console.log('Error:')
  console.log(err)
  worker.stop()
})

worker.start()
