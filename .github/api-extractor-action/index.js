const { Toolkit } = require('actions-toolkit');
const diff = require('diff-lines');

Toolkit.run(async tools => {
  const config = {
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
    body: '',
  };
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);

  let regex = /```ts(\r\n|\n|\r)?([\s\S]*)```/ms;

  const storefrontPRBranch = regex.exec(
    tools.getFile('etc/storefront.api.md')
  )[1];
  const assetsPRBranch = regex.exec(tools.getFile('etc/assets.api.md'))[1];
  await tools.runInWorkspace('sh', ['./scripts/api-extractor-for-develop.sh']);
  const storefrontTargetBranch = regex.exec(
    tools.getFile('develop-clone/etc/storefront.api.md')
  )[1];
  const assetsTargetBranch = regex.exec(
    tools.getFile('develop-clone/etc/assets.api.md')
  )[1];

  const diffStorefront = diff(storefrontPRBranch, storefrontTargetBranch, {
    n_surrounding: 2,
  });
  const diffAssets = diff(assetsPRBranch, assetsTargetBranch, {
    n_surrounding: 2,
  });

  const comments = await tools.github.issues.listComments({
    issue_number: tools.context.payload.pull_request.number,
    owner: tools.context.payload.repository.owner.login,
    repo: tools.context.payload.repository.name,
  });

  const botComment = comments.data.filter(comment =>
    comment.body.includes('Public API change detection bot')
  );

  config.body = `
  ## Public API change detection bot

  ### @spartacus/storefront public API diff

  ${
    !diffStorefront
      ? 'nothing changed ;)'
      : '``` diff\n' + diffStorefront + '\n```'
  }

  ### @spartacus/assets public API diff

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
