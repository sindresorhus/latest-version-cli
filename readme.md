# latest-version-cli

> Get the latest version of an npm package

## Install

```
$ npm install --global latest-version-cli
```

## Usage

```
$ latest-version --help

  Usage
    $ latest-version <package-name>

  Options
    --range  Specify which semver range to use to find the latest version

  Examples
    $ latest-version ava
    3.13.0
    $ latest-version electron --range=beta
    11.0.0-beta.11
```

## Related

- [latest-version](https://github.com/sindresorhus/latest-version) - API for this module
