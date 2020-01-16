# latest-version-cli [![Build Status](https://travis-ci.org/sindresorhus/latest-version-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/latest-version-cli)

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
    -v         Ouput the version of this package
    --version  Specify which dist-tag to use to find the latest version

  Example
    $ latest-version ava
    2.4.0

    $ latest-version ava --version=next
    2.0.0-rc.1
```


## Related

- [latest-version](https://github.com/sindresorhus/latest-version) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
