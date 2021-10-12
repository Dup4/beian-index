#! /usr/bin/env zx

import "zx/globals";

$.verbose = false;

const packageJsonPath = path.join(__dirname, "../../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

const version = packageJson["version"];
let releaseVersion = version;

const localLatestVersion = (
  await nothrow($`git describe --tags $(git rev-list --tags --max-count=1)`)
).stdout.trim();

if (version === localLatestVersion) {
  releaseVersion = "";
}

const remoteTagList = (
  await nothrow($`git ls-remote --tags origin`)
).stdout.trim();

if (remoteTagList.indexOf(version) !== -1) {
  releaseVersion = "";
}

console.log(releaseVersion);
