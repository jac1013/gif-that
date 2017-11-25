#!/usr/bin/env bash

npm run test-ci
if [ "$TRAVIS_BRANCH" = "master" ]; then
  npm run start-production &
  sleep 15
  npm run test-end2end-browserstack-ci
fi
