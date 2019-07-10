const { Toolkit } = require('actions-toolkit');
const diff = require('diff-lines');

Toolkit.run(async tools => {
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: 'Hello world 2',
  };
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);
  const storefrontPRBranch = tools.getFile('etc/storefront.api.md');
  const assetsPRBranch = tools.getFile('etc/assets.api.md');
  await tools.runInWorkspace('sh', ['./scripts/api-extractor-for-develop.sh']);
  const storefrontTargetBranch = tools.getFile(
    'develop-clone/etc/storefront.api.md'
  );
  const assetsTargetBranch = tools.getFile('develop-clone/etc/assets.api.md');
  const diffStorefront = diff(storefrontPRBranch, storefrontTargetBranch, {
    n_surrounding: 2,
  }).match('```ts(.*)```')[1];
  const diffAssets = diff(assetsPRBranch, assetsTargetBranch, {
    n_surrounding: 2,
  }).match('```ts(.*)```')[1];

  const comments = await tools.github.issues.listComments({
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
  });

  const botComment = comments.data.filter(comment =>
    comment.body.includes('PUBLIC API CHANGE DETECTION BOT')
  );

  config.body = `
  # PUBLIC API CHANGE DETECTION BOT

  ## Storefront public API diff

  ${
    !diffStorefront
      ? 'nothing changed ;)'
      : '``` diff\n' + diffStorefront + '\n```'
  }

  ## Assets public API diff

  ${!diffAssets ? 'nothing changed ;)' : '``` diff\n' + diffAssets + '\n```'}
  `;

  if (botComment && botComment.length) {
    await tools.github.issues.updateComment({
      comment_id: botComment[0].id,
      owner: tools.context.payload.repository.owner.login,
      repo: tools.context.payload.repository.name,
      body: config.body,
    });
  } else {
    await tools.github.issues.createComment(config);
  }
});
