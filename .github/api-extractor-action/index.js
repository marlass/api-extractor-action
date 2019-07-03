const { Toolkit } = require('actions-toolkit');
const tools = new Toolkit();

console.log(tools.context.payload);

tools.exit.success('We did it team!');
