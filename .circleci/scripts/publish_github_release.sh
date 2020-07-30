#!/bin/sh

# exit immediately if some command fails
set -e

wget -O- \
  --header "Content-Type: application/json" \
  --header "Authorization: token ${GITHUB_TOKEN}" \
  --post-data "{\"tag_name\":\"v0.0.$CIRCLE_BUILD_NUM\", \"name\":\"Automated release v0.0.$CIRCLE_BUILD_NUM\"}" \
  https://api.github.com/repos/join-com/${SERVICE_NAME}/releases
