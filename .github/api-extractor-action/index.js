const { Toolkit } = require('actions-toolkit');

Toolkit.run(async tools => {
  console.log(tools.context.payload);
  await tools.github.pulls.createComment({
    pull_number: tools.context.payload.pull_request.number,
    body: 'Hello world 2',
  });

  tools.exit.success('We did it team!');
  // Action code
});
