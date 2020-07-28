#!/bin/bash

# exit immediately if some command fails
set -e

wget -O- \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $HUBOT_ACCESS_TOKEN" \
  --post-data "{\"serviceName\":\"$SERVICE_NAME\", \"environment\":\"dev\", \"image\":\"eu.gcr.io/$PROJECT_NAME/$SERVICE_NAME:$CIRCLE_SHA1\", \"initiator\":\"$CIRCLE_USERNAME\"}" \
  $HUBOT_DEPLOY_URL
