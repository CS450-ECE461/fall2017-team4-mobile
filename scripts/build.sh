#!/bin/sh

if [ $TRAVIS_BRANCH = 'master' ]; then
  echo "ember build --environment=production";
  sudo ember cordova:build --environment=production --platform=android;
else
  echo "ember build --environment=development"
  sudo ember cordova:build --environment=development --platform=android;
fi
