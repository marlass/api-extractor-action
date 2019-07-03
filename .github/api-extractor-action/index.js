const { Toolkit } = require('actions-toolkit');
const diff = require('git-diff');
const fetch = require('node-fetch');

Toolkit.run(async tools => {
  // console.log(tools.context.payload);
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  tools.store.set('prev', tools.getFile('etc/storefront.api.md'));
  const prev = tools.getFile('etc/storefront.api.md');
  await tools.runInWorkspace('yarn', ['install']);

  await tools.runInWorkspace('yarn', ['build:core:lib']);
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);
  const curr = tools.getFile('etc/storefront.api.md');
  config.body = `old: ${prev}, from master: ${curr}`;
  const diff = diff(prev, curr);
  config.body = `
  \`\`\` diff
  ${diff}
  \`\`\`
  `;
  await tools.github.issues.createComment(config);
  tools.store.save();
  // Action code
});
