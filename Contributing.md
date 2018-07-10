# Contributing

Want to contribute to `react-values`? That would be awesome!

* [Reporting Bugs](#reporting-bugs)
* [Submitting Pull Requests](#submitting-pull-requests)
* [Running Examples](#running-examples)
* [Running Tests](#running-tests)
* [Publishing Releases](#publishing-releases)

## Reporting Bugs

If you run into any weird behavior while using the library, feel free to open a new issue in this repository! Please run a **search before opening** a new issue, to make sure that someone else hasn't already reported or solved the bug you've found.

## Submitting Pull Requests

All pull requests are super welcomed and greatly appreciated! Please include a clear description of what new logic the pull request introduces or changes, as well as tests and docs!

## Running Examples

You can run the examples locally with:

```
yarn install
yarn start
```

Which will open the examples at `http://localhost:8888` for you to visit. They will live reload when you make any changes.

## Running Tests

To run the tests, you need to have the repository cloned to your computer. After that, you need to `cd` into the directory where you cloned it, and install the dependencies with `yarn` and run the tests with:

```
yarn install
yarn test
```

If you need to debug something, you can add a `debugger` line to the source, and then run `yarn test debug`.

## Publishing Releases

To publish a new release of the library follow the prompts after running:

```js
npm run release
```

**But** you must make sure you are using `npm` to run the release script, because using `yarn` results in failures!
