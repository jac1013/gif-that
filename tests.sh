#!/usr/bin/env bash

npm run test-ci
npm run start-production &
sleep 15
npm run test-end2end-browserstack-ci
