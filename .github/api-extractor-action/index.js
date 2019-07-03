const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit({
  event: ['pull_requests']
})

console.log(tools.context.payload);