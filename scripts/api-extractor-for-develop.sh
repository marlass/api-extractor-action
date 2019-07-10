#!/usr/bin/env bash
set -e


npm i -g @microsoft/api-extractor

git clone https://github.com/SAP/cloud-commerce-spartacus-storefront.git develop-clone

cd develop-clone

yarn

yarn build:core:lib

# Assets
cp ./api/api-extractor-assets.json ./dist/assets/api-extractor.json
(
  cd ./dist/assets && \
  api-extractor run --local --verbose
)

# Core
# cp ./api/api-extractor-core.json ./dist/core/api-extractor.json
# (
#   cd ./dist/core && \
#   api-extractor run --local --verbose
# )

# Storefrontlib
cp ./api/api-extractor-storefrontlib.json ./dist/storefrontlib/api-extractor.json
(
  cd ./dist/storefrontlib && \
  api-extractor run --local --verbose
)
