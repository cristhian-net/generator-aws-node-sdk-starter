const AWS = require('aws-sdk')
require('dotenv').config()

AWS.config.update({
  region: 'us-east-1',
})

const runAsync = async () => {
  // Start coding here!
  console.log('Hello world!')
}

runAsync()
