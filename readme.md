# latest-version-cli

> Get the latest version of an npm package

## Install

```sh
npm install --global latest-version-cli
```

## Usage

```
$ latest-version --help

  Usage
    $ latest-version <package-name>

  Options
    --range          Specify which semver range to use to find the latest version
    --registry-url   Custom registry URL
    --no-deprecated  Omit deprecated versions

  Examples
    $ latest-version ava
    6.1.1
    $ latest-version electron --range=beta
    29.0.0-beta.12
```

## Related

- [latest-version](https://github.com/sindresorhus/latest-version) - API for this module
