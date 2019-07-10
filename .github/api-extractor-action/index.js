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
  });
  const diffAssets = diff(assetsPRBranch, assetsTargetBranch, {
    n_surrounding: 2,
  });

  config.body = `
  ## Storefront public API diff

  ${
    diffStorefront.length === 0
      ? 'nothing changed ;)'
      : `
    \`\`\` diff
    ${diffStorefront}
    \`\`\`
    `
  }

  ## Assets public API diff

  ${
    diffAssets.length === 0
      ? 'nothing changed ;)'
      : `
    \`\`\` diff
    ${diffAssets}
    \`\`\`
    `
  }
  `;
  await tools.github.issues.createComment(config);
  // Action code
});
