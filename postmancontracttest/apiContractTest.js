const newman = require('newman')

newman.run({
  collection: require('./APIContractTest.postman_collection.json'),
  reporters: 'cli',
})
