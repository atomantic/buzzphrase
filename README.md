# buzzphrase
[![](https://travis-ci.org/atomantic/buzzphrase.svg?branch=master)](https://travis-ci.org/atomantic/buzzphrase)
[![](https://img.shields.io/npm/dm/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](https://img.shields.io/npm/v/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](https://img.shields.io/david/atomantic/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)

## Get a Buzzword Phrase

Since I like to synergize backward overflow for upward mobility (thank you 30 Rock) as much as the next person, I figured this could make a fun if not at all useful node module. This is also a module I use for educational purposes and the occasional private git commit message:

```bash
# ¯\_(ツ)_/¯ don't do this to people you work with
git commit -m "$(buzzphrase 2)"
```

As of 2.0.0, this module splits up the word groups into verb + adjective + noun and allows combining multiple phrases with a continuation phrase. It also now has logic to make each word mostly unique in the overall phrase. See below when called with 15 joined phrases.

## Usage

### As a Global Install

Run on the command line, you can specify the number of joining iterations (default 1) and a format (default '{a} {v} {N}'):
```bash
  buzzphrase {iterations} {format}
```

```bash
⇒ npm install -g buzzphrase
⇒ buzzphrase
⇒ # same as "buzzphrase 1 '{a} {v} {N}'"
```
> synthesized transitional alignments

```bash
⇒ buzzphrase 1 '{v} {a} {n}'
```
> lobotomized bleeding-edge community

```bash
⇒ buzzphrase 2
```
> intermediated 24/7 convergence, leveraging distributed anti-fragile paradigm-shifts

```bash
⇒ buzzphrase 3
```
> enhanced incremental initiatives independent of reinvigorated extensible channels, which revolutionizes mesh didactic partnerships

```bash
⇒ buzzphrase 15
```
> concealed compatible paradigm-shifts, in contrast to emitted unique convergence, in preparation for serialized innovative abstractions, which revolutionizes e-enabled acoustic singularity, anticipating filtered didactic policies, independent of printed-out best-of-breed hardware, liberating leveraged reciprocal management, enhanced by branded digital pooling on behalf of virtualized zero-downtime #DevOps, which foreshadows upheld extravehicular normalization for facilitated polymorphic markets, which will enable printed multilayered communities, protecting against scanned organizational clusters, forging offloaded 24/7 virtualization, pioneering clicked asynchronous partnerships

### As a module
```javascript
const buzzphrase = require('buzzphrase')

// get a phrase as a building block
console.log("we are building " + buzzphrase.get())
// -> we are building marshalled retroactive applications

// custom phrase
console.log(buzzphrase.get({
  format: '{i} {a} {n} {f}'
}))
// -> embrace digital #DevOps for dummies

// log a joined series of 2 phrases to the console
buzzphrase.log({iterations: 2})
// -> initialized cognitive paradigm-shifts, in preparation for iterated ubiquitous architectures
```

### Format Recommendations
#### '{a} {v} {N}' - default
```
retrospective digitized relationships
adaptive accelerated markets
shallow merged markets
```
#### '{a} {v} {n}'
```
unique routed projection
sustainable filed touchpoint
quantum initialized programming
```
#### '{V} {a} {n} {f}'
```
incentivizing B2B value-add as code
popping-up frictionless partnership at scale
evolving third-generation projection for people
```
### '{i} {v} {a} {N}'
```
deliver merged immersive channels
syndicate engineered all-purpose interfaces
grow architected adversarial mobility
```

### API

- `get(config)`: Get a phrase, with config options
  - default config:
  ```javascript
  {
    format: '{a} {v} {N}',
    iterations: 1
  }
  ```
  - `format`: This is a string template that will replace the following with random words
    - `{a}` adjective
    - `{c}` continuation
    - `{f}` final (e.g. "for dummies")
    - `{i}` imperative verb
    - `{N}` plural noun
    - `{n}` singular noun
    - `{v}` past-tense verb (e.g. initialized)
    - `{V}` present participle verb (e.g. clustering)
  - `iterations`: specify how many times the format should be joined together with continuations ('{c}'). For example, specifying `get({iterations: 2})` will conjoin the default format into `{a} {v} {N} {c} {a} {v} {N}`
- `getImperative(iterations)`
  - *DEPRECATED*: instead use
  ```javascript
  buzzphrase.get({
    format:'{i} {a} {v} {N}',
    iterations: iterations
  })
  ```

- `getPhrase(iterations)`
  - *DEPRECATED*: instead use
  ```javascript
  buzzphrase.get({
    iterations: iterations
  })
  ```

- `buzz(iterations)`
  - *DEPRECATED*: instead use
  ```javascript
  buzzphrase.log({
    iterations: iterations
  })
  ```
- `log(config)`: same as `get(config)` but also uses console.log to spit this out into STDOUT

## Testing
```
npm test
```

### Testing all supported node.js versions
1. install docker | [Docker for Mac](https://www.docker.com/docker-mac) | [Docker for Windows](https://www.docker.com/docker-windows)
2. run tests
```
npm run nodeversions
```

# Author

Adam Eivy is a software architect by day and a drawing dad by night. [find him on the interwebs](http://adameivy.com)

[![gratipay](https://img.shields.io/gratipay/antic.svg?style=flat)](https://gratipay.com/antic)

![follow](https://img.shields.io/twitter/follow/antic.svg?style=social&label=Follow)

# Related

If you like this module, check out [antic](https://www.npmjs.com/package/antic) or [BuzzphraseBot](https://twitter.com/BuzzphraseBot) for lulz!
