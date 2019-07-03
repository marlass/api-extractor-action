const { Toolkit } = require('actions-toolkit');

Toolkit.run(async tools => {
  tools.context.console.log(tools.context.payload);
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  console.log(config);
  tools.store.set('prev', tools.getFile('etc/storefront.api.md'));
  tools.runInWorkspace('./scripts/api-extractor.sh');
  await tools.github.issues.createComment(config);
  // Action code
});
