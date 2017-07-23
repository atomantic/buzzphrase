# buzzphrase
[![](https://travis-ci.org/atomantic/buzzphrase.svg?branch=master)](https://travis-ci.org/atomantic/buzzphrase)
[![](https://img.shields.io/npm/dm/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](https://img.shields.io/npm/v/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](https://img.shields.io/david/atomantic/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)

## Get a Buzzword Phrase

Since I like to synergize backward overflow for upward mobility (thank you 30 Rock) as much as the next person, I figured this could make a fun if not at all useful node module. This is also a module I use for educational purposes and the occassional private git commit message:

```bash
# ¯\_(ツ)_/¯ don't do this to people you work with
git commit -m "$(buzzphrase 2)"
```

As of 2.0.0, this module splits up the word groups into verb + adjective + noun and allows combining multiple phrases with a continuation phrase. It also now has logic to make each word mostly unique in the overall phrase. See below when called with 15 parts.

## Usage

### As a Global Install

Run on the command line, you can specify the number of joining iterations `buzzphrase {iterations}` or none, default 1 (`buzzphrase`)
```bash
⇒ npm install -g buzzphrase
⇒ buzzphrase
```
> synthesized transitional alignment

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
> exploiting real-time engagement, leveraging reinvigorated parallel methodologies on behalf of mesh extensible interfaces, liberating productized asynchonous platforms, protecting against strategized multi-layered channels in preparation for recontextualized best-of-breed touchpoints, enhanced by synchronized compelling partnerships, forging expedited functional applications, diametrically opposed to synthesized cross-platform initiatives, anticipating cultivated holistic mobility, which will enable harnessed proactive options independent of engineered innovative projection, which revolutionizes incentivized custom infrastructures in contrast to streamlined responsive time-phases, which will enable optimized bleeding-edge management

### As a module
```javascript
var buzzphrase = require('buzzphrase');

// get a phrase as a building block
console.log("we are building " + buzzphrase.getPhrase());

// imperative phrase
console.log(buzzphrase.getImperative());

// log a joined series of 2 phrases to the console
buzzphrase.buzz(2);
```

### API

- `getImperative(iterations)`: Get any number of imperative phrases specified by `iterations` (Number), which will be joined together as one long synergistic flow -- this is the same as getPhrase(iterations) with the addition of an imperative verb at the beginning of the phrase
- `getPhrase(iterations)`: Get any number of phrases specified by `iterations` (Number), which will be joined together as one long synergistic flow
- `buzz(iterations)`: Log out (console) any number of phrases specified by `iterations` (Number), which will be joined together as a third-generation contingency time-phase

## Testing
```
npm i -g mocha
mocha # or `npm test`
```

### Testing all node.js versions
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
