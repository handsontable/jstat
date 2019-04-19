**@handsontable/jstat** - JavaScript Statistical Library
===============================================================

**jStat** provides native javascript implementations of statistical functions.
Full details are available in the [docs](http://handsontable.github.io/jstat/).
jStat provides more functions than most libraries, including the weibull, cauchy, poisson, hypergeometric, and beta distributions.
For most distributions, jStat provides the pdf, cdf, inverse, mean, mode, variance, and a sample function, allowing for more complex calculations.

[![npm version](https://img.shields.io/npm/v/@handsontable/jstat.svg)](https://www.npmjs.com/package/@handsontable/jstat)

## Table of contents


 1. [Installation](#installation)
 2. [Getting Started](#getting-started)
 3. [Building jStat](#building-jstat)
 4. [Running Tests](#Running-tests)
 5. [Get the Code](#get-the-code)
 6. [Contributing](#contributing)
 7. [Licensing](#licensing)

## Installation
Use npm to download the project.
```
npm install @handsontable/jstat
```

## Getting Started

jStat can be used in the browser. The `jStat` object will be added to the window. For example:

```html
<script src="https://cdn.jsdelivr.net/npm/@handsontable/jstat/dist/jstat.min.js"></script> <!-- include jStat, from the CDN or otherwise -->
<script>
var jstat = this.jStat(dataset); // jStat will be added to the window

data[i]['cum'] = jstat.normal(jstat.mean(), jstat.stdev()).cdf(data[i].x);
</script>

```

Using jStat in Node environment.

```js
const jStat = require('@handsontable/jstat');

data[i]['cum'] = jStat.normal(jStat.mean(), jStat.stdev()).cdf(data[i].x);
```

## Building jStat

First, clone a copy of the jStat git repo by running `git clone https://github.com/handsontable/jstat.git`.

To download all necessary dependencies run `npm install` in the cloned repository.

Then, to get a complete, minified version of jStat and all documentation, simply type `npm run all`.

The built version of jStat will be put in the `dist/` subdirectory.

Generate just the documentation by running `npm run doc`. Documentation will be placed in `dist/docs` by default.

To remove all built files, run `npm run clean`.

## Running Tests

Execute all tests by running `npm run test`.

Or if you wish to run a specific test, `cd` to `test/<subdir>` and run `node <some_test>-test.js`.

## Get the Code

Both the minified and unminified source are located in the `dist/` directory. For those who don't want to build
it themselves.

## Contributing
If you would like to help us to develop this library, please first read the [guide for contributors](//github.com/handsontable/jstat/blob/master/CONTRIBUTING.md).

## Licensing
This library is released under the MIT license.
The project is based on the great work of [jStat](https://github.com/jstat/jstat).
