#! /usr/bin/env zx

import "zx/globals";

$.verbose = false;

const packageJsonPath = path.join(__dirname, "../../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

const version = packageJson["version"];
const latestVersion = (
  await nothrow($`git describe --tags $(git rev-list --tags --max-count=1)`)
).stdout.trim();

let releaseVersion = "";

if (version !== latestVersion) {
  releaseVersion = version;
}

console.log(process.env.GITHUB_REPOSITORY);

console.log(releaseVersion);
