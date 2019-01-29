# remark-preset-lint-metarhia

[![Build Status][travis-badge]][travis-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-url]

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
  "plugins": ["remark-preset-lint-metarhia"]
}
```

and create an npm script to run

```console
remark .
```

## Contributing

Please adhere to [Conventional Commits][] styleguide for commit messages
(`npm install` creates a Git hook that lints your commit messages, and they are
also checked on CI, but please write them properly beforehand so that they don't
get rejected. If that happens locally while committing, though, don't worry,
your commit message isn't lost, you can still find it in `.git/COMMIT_EDITMSG`).

### Releasing

Collaborators can release new versions using

```console
npm run release
git push origin master --follow-tags
npm publish
```

This will update the version in `package.json` and `package-lock.json`
according to semantic versioning using commit messages to determine whether it
is a patch, minor or major release, update the changelog, tag the new version
in Git, and publish it to npm registry.

## License

MIT. See the [LICENSE][] file for details.

[conventional commits]: https://conventionalcommits.org/
[license]: LICENSE
[metarhia-jstp]: https://github.com/metarhia/jstp
[remark-lint]: https://github.com/wooorm/remark-lint
[travis-badge]: https://travis-ci.org/metarhia/remark-preset-lint-metarhia.svg?branch=master
[travis-url]: https://travis-ci.org/metarhia/remark-preset-lint-metarhia
[greenkeeper-badge]: https://badges.greenkeeper.io/metarhia/remark-preset-lint-metarhia.svg
[greenkeeper-url]: https://greenkeeper.io/
