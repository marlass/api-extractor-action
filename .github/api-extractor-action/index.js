const { Toolkit } = require('actions-toolkit');
const diff = require('diff-lines');

Toolkit.run(async tools => {
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  // const prev = tools.getFile('etc/storefront.api.md');
  await tools.runInWorkspace('yarn', ['install']);

  await tools.runInWorkspace('yarn', ['build:core:lib']);
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);
  const inBranch = tools.getFile('etc/storefront.api.md');
  await tools.runInWorkspace('sh', ['./scripts/api-extractor-for-develop.sh']);
  const developBranch = tools.getFile('develop-clone/etc/storefront.api.md');
  // const curr = tools.getFile('etc/storefront.api.md');
  // config.body = `old: ${prev}, from master: ${curr}`;
  const diff2 = diff(inBranch, developBranch, {
    n_surrounding: 2,
  });

  console.log(diff2);
  config.body = `
  \`\`\` diff
  ${diff2}
  \`\`\`
  `;
  await tools.github.issues.createComment(config);
  // Action code
});
