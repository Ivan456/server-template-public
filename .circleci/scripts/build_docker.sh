#!/bin/bash

# exit immediately if some command fails
set -e

echo $GCLOUD_SERVICE_KEY | base64 -d > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
gcloud config set project $PROJECT_NAME
gcloud config set compute/zone ${CLOUDSDK_COMPUTE_ZONE}
gcloud --quiet config set container/cluster $CLUSTER_NAME
gcloud --quiet container clusters get-credentials $CLUSTER_NAME
gcloud --quiet auth configure-docker eu.gcr.io
docker build -t eu.gcr.io/${PROJECT_NAME}/${SERVICE_NAME}:${CIRCLE_SHA1} .
docker tag eu.gcr.io/${PROJECT_NAME}/${SERVICE_NAME}:${CIRCLE_SHA1} eu.gcr.io/${PROJECT_NAME}/${SERVICE_NAME}:latest
docker push eu.gcr.io/${PROJECT_NAME}/${SERVICE_NAME}
