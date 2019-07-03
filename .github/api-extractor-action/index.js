const { Toolkit } = require('actions-toolkit');

Toolkit.run(async tools => {
  console.log(tools.context.payload);
  await tools.github.pulls.createComment({
    pull_number: tools.context.payload.pull_request.number,
    commit_id: tools.context.sha,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    path: './README.md',
    position: 0,
    body: 'Hello world 2',
  });
  // Action code
});
