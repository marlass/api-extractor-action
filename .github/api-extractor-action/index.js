const { Toolkit } = require('actions-toolkit');
const tools = new Toolkit();

console.log(tools.context.payload);

await tools.github.pulls.createComment({
  pull_number: tools.context.payload.pull_request.number,
  body: 'Hello world',
});

tools.exit.success('We did it team!');
