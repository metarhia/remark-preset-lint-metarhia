# remark-preset-lint-metarhia

[![Build Status][travis-badge]][travis-url]

Opinionated [remark-lint][] preset, originated from the config used in
[metarhia-jstp][] and decoupled into a separate and shareable one.

## Installation

```console
npm i -D remark-cli remark-preset-lint-metarhia
```

## Usage

Create `.remarkrc` file:

```json
{
  "plugins": [
    "remark-preset-lint-metarhia"
  ]
}
```

and create an npm script to run

```console
remark .
```

## License

MIT. See the [LICENSE][] file for details.

[LICENSE]: LICENSE.md
[metarhia-jstp]: https://github.com/metarhia/jstp
[remark-lint]: https://github.com/wooorm/remark-lint
[travis-badge]: https://travis-ci.org/metarhia/remark-preset-lint-metarhia.svg?branch=master
[travis-url]: https://travis-ci.org/metarhia/remark-preset-lint-metarhia
