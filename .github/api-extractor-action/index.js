const { Toolkit } = require('actions-toolkit');

Toolkit.run(async tools => {
  // console.log(tools.context.payload);
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  await tools.store.set('prev', tools.getFile('etc/storefront.api.md'));
  await tools.runInWorkspace('yarn', ['install']);
  await tools.runInWorkspace('yarn', ['build:core:lib']);
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);
  await tools.github.issues.createComment(config);
  // Action code
});
