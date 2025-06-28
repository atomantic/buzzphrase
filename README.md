# buzzphrase

[![](https://travis-ci.org/atomantic/buzzphrase.svg?branch=master)](https://travis-ci.org/atomantic/buzzphrase)
[![](https://img.shields.io/npm/dm/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](https://img.shields.io/npm/v/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)

## Get a Buzzword Phrase

Since I like to synergize backward overflow for upward mobility (thank you 30 Rock) as much as the next person, I figured this could make a fun if not at all useful node module. This is also a module I use for educational purposes and the occasional private git commit message:

```bash
# ¯\_(ツ)_/¯ don't do this to people you work with
git commit -m "$(npx buzzphrase 2)"
```

As of 2.0.0, this module splits up the word groups into verb + adjective + noun and allows combining multiple phrases with a continuation phrase. It also now has logic to make each word mostly unique in the overall phrase. See below when called with 15 joined phrases.

## Usage

### Command Line

You can run buzzphrase directly from the command line. Specify the number of joining iterations (default 1) and a format (default '{a} {v} {N}').

```bash
npx buzzphrase {iterations} {format}
# or
npx buzzphrase {format}
# e.g.
npx buzzphrase '{a} {v} {N}'
# or
npx buzzphrase 2 '{a} {v} {N}'
```

#### Examples

**Default usage:**

```bash
npx buzzphrase
# same as: npx buzzphrase 1 '{a} {v} {N}'
```

> synthesized transitional alignments

**Custom format:**

```bash
npx buzzphrase 1 '{v} {a} {n}'
```

> lobotomized bleeding-edge community

**Test a new word with random counterparts:**

```bash
npx buzzphrase 1 '{v} {a} consumption'
```

> repurposed organizational consumption

**Multiple joined phrases:**

```bash
npx buzzphrase 2
```

> intermediated 24/7 convergence, leveraging distributed anti-fragile paradigm-shifts

```bash
npx buzzphrase 3
```

> enhanced incremental initiatives independent of reinvigorated extensible channels, which revolutionizes mesh didactic partnerships

```bash
npx buzzphrase 15
```

> concealed compatible paradigm-shifts, in contrast to emitted unique convergence, in preparation for serialized innovative abstractions, which revolutionizes e-enabled acoustic singularity, anticipating filtered didactic policies, independent of printed-out best-of-breed hardware, liberating leveraged reciprocal management, enhanced by branded digital pooling on behalf of virtualized zero-downtime #DevOps, which foreshadows upheld extravehicular normalization for facilitated polymorphic markets, which will enable printed multilayered communities, protecting against scanned organizational clusters, forging offloaded 24/7 virtualization, pioneering clicked asynchronous partnerships

** Other Interesting Formats **

```bash
npx buzzphrase '{a} {v} {n}'
```

> unique routed projection
>
> sustainable filed touchpoint
>
> quantum initialized programming

```bash
npx buzzphrase '{V} {a} {n} {f}'
```

> incentivizing B2B value-add as code
>
> popping-up frictionless partnership at scale
>
> evolving third-generation projection for people

```bash
npx buzzphrase '{i} {v} {a} {N}'
```

> deliver merged immersive channels
>
> syndicate engineered all-purpose interfaces
>
> grow architected adversarial mobility

```bash
npx buzzphrase '{i} the {n} to {d} {V} the {j}'
```

> incentivize the platform to strategically streamline the low-hanging fruit

```bash
npx buzzphrase '{V} {a} {N} is how we {d} {j}'
```

> leveraging scalable methodologies is how we dynamically circle back

```bash
npx buzzphrase 'Our {j} is to {d} {i} {a} {N}'
```

> Our paradigm shift is to holistically deploy cutting-edge infrastructures

```bash
npx buzzphrase 'To achieve {j}, we must {d} {i} our {a} {N}'
```

> To achieve a win-win situation, we must completely deploy our best-of-breed solutions.

```bash
npx buzzphrase "It's not about {j}, it's about {V} {a} {N}"
```

> It's not about the elephant in the room, it's about empowering proactive methodologies.

```bash
npx buzzphrase 'Our {a} {n} is the key to unlocking the {j}'
```

> Our collaborative alignment is the key to unlocking the voice of the customer.

```bash
npx buzzphrase 'We need to be {d} {a} in our {N}'
```

> We need to be uniquely collaborative in our partnerships.

```bash
npx buzzphrase '{d} {V} our {N}'
```

> Conveniently streamlining our deliverables.

```bash
npx buzzphrase '{d} {v}'
```

> Globally synergized.

#### The "Ultimate Synergy" Format

```bash
npx buzzphrase "It's not about {j}, it's about {d} {V} our {a} {N}, {c} we must {i} the {n} to {d} {V} the {j}, {c} which enables a more {a} and {a} {n}, {c} ensuring our {N} are {d} {v}, all while we {i} our {j} {f}."
```

> It's not about the long pole in the tent, it's about completely architecting our B2B infrastructures, in preparation for us to streamline the network to competently incentivize our core competency, which enables a more human-centric and frictionless paradigm, ensuring our deliverables are uniquely re-purposed, all while we synergize our heavy lifting for the win.

### As a Module

You can also use buzzphrase as a module in your JavaScript projects:

```javascript
import buzzphrase from "buzzphrase";
// OR
// const buzzphrase = require("buzzphrase");

// Get a phrase as a building block
console.log("we are building " + buzzphrase.get());
// -> we are building marshalled retroactive applications

// Custom phrase
console.log(
    buzzphrase.get({
        format: "{i} {a} {n} {f}",
    })
);
// -> embrace digital #DevOps for dummies

// Log a joined series of 2 phrases to the console
buzzphrase.log({ iterations: 2 });
// -> initialized cognitive paradigm-shifts, in preparation for iterated ubiquitous architectures
```

### API

-   `get(config)`: Get a phrase, with config options
    -   default config:
    ```javascript
    {
      format: '{a} {v} {N}',
      iterations: 1
    }
    ```
    -   `format`: This is a string template that will replace the following with random words
        -   `{a}` adjective
        -   `{c}` continuation
        -   `{d}` adverb
        -   `{f}` final (e.g. "for dummies")
        -   `{i}` imperative verb
        -   `{j}` jargon
        -   `{N}` plural noun
        -   `{n}` singular noun
        -   `{v}` past-tense verb (e.g. initialized)
        -   `{V}` present participle verb (e.g. clustering)
    -   `iterations`: specify how many times the format should be joined together with continuations ('{c}'). For example, specifying `get({iterations: 2})` will conjoin the default format into `{a} {v} {N} {c} {a} {v} {N}`
-   `getImperative(iterations)`

    -   _DEPRECATED_: instead use

    ```javascript
    buzzphrase.get({
        format: "{i} {a} {v} {N}",
        iterations: iterations,
    });
    ```

-   `getPhrase(iterations)`

    -   _DEPRECATED_: instead use

    ```javascript
    buzzphrase.get({
        iterations: iterations,
    });
    ```

-   `buzz(iterations)`
    -   _DEPRECATED_: instead use
    ```javascript
    buzzphrase.log({
        iterations: iterations,
    });
    ```
-   `log(config)`: same as `get(config)` but also uses console.log to spit this out into STDOUT

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

Adam Eivy is a Principal Software Engineer at a large media company by day and a drawing dad by night. [Find him here on the interwebs](https://adameivy.com)

![follow](https://img.shields.io/twitter/follow/antic.svg?style=social&label=Follow)

# Related

If you like this module, check out [antic](https://www.npmjs.com/package/antic) or [BuzzphraseBot](https://twitter.com/BuzzphraseBot) for lulz!
