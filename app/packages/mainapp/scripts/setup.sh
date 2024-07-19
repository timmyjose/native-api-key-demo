#!/usr/bin/env bash

set -euxo pipefail

ANDROID_DIR=android
IOS_DIR=ios

if [[ "$@" == *"--clean"* ]]; then
  (
  echo "Doing a clean build..."
  set +e
  echo "Removing app/node_modules..."
  rm -rf ../../node_modules
  echo "Removing android and ios directories..."
  rm -rf android ios
  set -e
)
fi

yarn install

echo "Preparing the Api Key native module..."
yarn workspace expo-native-configuration clean
yarn workspace expo-native-configuration prepare

if [[ ! -d "${ANDROID_DIR}" || ! -d "${IOS_DIR}" ]]; then
  echo "Missing Android and/or iOS directories. Running prebuild..."
  npx expo prebuild
fi