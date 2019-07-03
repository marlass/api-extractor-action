const { Toolkit } = require('actions-toolkit');
// const diff = require('git-diff');
const fetch = require('node-fetch');

Toolkit.run(async tools => {
  // console.log(tools.context.payload);
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  console.log(tools.store.get('prev'));
  tools.store.set('prev', tools.getFile('etc/storefront.api.md'));
  console.log('wat');
  await tools.runInWorkspace('yarn', ['install']);
  console.log('fdsfd');
  const fromMaster = await fetch(
    `https://raw.githubusercontent.com/marlass/api-extractor-action/master/etc/storefront.api.md?token=${
      tools.token
    }`
  );
  await tools.runInWorkspace('yarn', ['build:core:lib']);
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);
  config.body = `old: ${tools.getFile(
    'etc/storefront.api.md'
  )}, from master: ${fromMaster}`;
  await tools.github.issues.createComment(config);
  tools.store.save();
  // Action code
});
