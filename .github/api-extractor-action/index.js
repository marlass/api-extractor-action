const { Toolkit } = require('actions-toolkit');

Toolkit.run(async tools => {
  console.log(tools.context.payload);
  await tools.github.pulls.createComment({
    pull_number: tools.context.payload.pull_request.number,
    commit_id: tools.context.sha,
    body: 'Hello world 2',
  });
  // Action code
});
