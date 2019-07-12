const { Toolkit } = require('actions-toolkit');
const diff = require('diff-lines');
const normalizeNewline = require('normalize-newline');

Toolkit.run(async tools => {
  const issueNumber = tools.context.payload.pull_request.number;
  const owner = tools.context.payload.repository.owner.login;
  const repo = tools.context.payload.repository.name;
  const regexForTSSnippetInMarkdown = /```ts([\s\S]*)```/ms;
  console.log(tools.context.payload.pull_request);

  const config = {
    issue_number: issueNumber,
    owner,
    repo,
    body: '',
  };
  await tools.runInWorkspace('sh', ['./scripts/api-extractor.sh']);

  const storefrontPRBranch = regex
    .exec(normalizeNewline(tools.getFile('etc/storefront.api.md')))[1]
    .trim();
  const assetsPRBranch = regex
    .exec(normalizeNewline(tools.getFile('etc/assets.api.md')))[1]
    .trim();
  await tools.runInWorkspace('sh', [
    './scripts/api-extractor-for-branch.sh',
    targetBranch,
  ]);
  const storefrontTargetBranch = regex
    .exec(
      normalizeNewline(
        tools.getFile('target-branch-clone/etc/storefront.api.md')
      )
    )[1]
    .trim();
  const assetsTargetBranch = regex
    .exec(
      normalizeNewline(tools.getFile('target-branch-clone/etc/assets.api.md'))
    )[1]
    .trim();

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
