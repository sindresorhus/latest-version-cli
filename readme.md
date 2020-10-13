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
    -v         Ouput the version of this package
    --range    Specify which semver range to use to find the latest version

  Example
    $ latest-version ava
    3.13.0

    $ latest-version ava --range=next
    2.0.0-rc.1
```


## Related

- [latest-version](https://github.com/sindresorhus/latest-version) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
