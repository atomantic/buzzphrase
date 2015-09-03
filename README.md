# buzzphrase
[![](http://img.shields.io/gratipay/antic.svg?style=flat)](https://gratipay.com/antic)
[![](http://img.shields.io/npm/dm/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](http://img.shields.io/npm/v/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)
[![](http://img.shields.io/codeclimate/github/atomantic/buzzphrase.svg?style=flat)](https://codeclimate.com/github/atomantic/buzzphrase)
[![](http://img.shields.io/david/atomantic/buzzphrase.svg?style=flat)](https://www.npmjs.org/package/buzzphrase)

I logged into my computer today and saw this pop into my terminal (a gift from `fortune`):

```
Column 1          Column 2              Column 3

0. integrated     0. management         0. options
1. total          1. organizational     1. flexibility
2. systematized   2. monitored          2. capability
3. parallel       3. reciprocal         3. mobility
4. functional     4. digital            4. programming
5. responsive     5. logistical         5. concept
6. optional       6. transitional       6. time-phase
7. synchronized   7. incremental        7. projection
8. compatible     8. third-generation   8. hardware
9. balanced       9. policy             9. contingency

    The procedure is simple.  Think of any three-digit number, then select
the corresponding buzzword from each column.  For instance, number 257 produces
"systematized logistical projection," a phrase that can be dropped into
virtually any report with that ring of decisive, knowledgeable authority.  "No
one will have the remotest idea of what you're talking about," says Broughton,
"but the important thing is that they're not about to admit it."
        -- Philip Broughton, "How to Win at Wordsmanship"

```

Since I like to synergize backward overflow for upward mobility (thank you 30 Rock) as much as the next person, I figured this could make a fun if not at all useful node module.
Also, to allow for future improvements on the wordsets, I incremental-engineered it a little for responsive organizational projection.

## Usage

### As a Global Install

Run on the command line, you can specify the number of joining iterations `buzzphrase {iterations}` or none, default 1 (`buzzphrase`)
```
⇒ npm install -g buzzphrase
⇒ buzzphrase
synchronized organizational hardware
⇒ buzzphrase 2
optional incremental programming, which will enable integrated transitional flexibility
⇒ buzzphrase 3
total reciprocal programming independent of compatible reciprocal capability, which will enable total third-generation contingency
```

### As a module
```
var buzzphrase = require('buzzphrase');

// get a phrase as a building block
console.log("this is a seriously awesome module that will " + buzzphrase.getPhrase());

// log a joined series of 2 phrases to the console
buzzphrase.buzz(2);
```

### API

- `getPhrase(iterations)`: Get any number of phrases specified by `iterations` (Number), which will be joined together as one long synergistic flow
- `buzz(iterations)`: Log out (console) any number of phrases specified by `iterations` (Number), which will be joined together as a third-generation contingency time-phase

## Author

Adam Eivy is a software architect by day and a drawing dad by night. Check out his latest project [Beetle Royale](http://beetleroyale.com) or [follow him on the interwebs](http://adameivy.com)

## Related

If you like this module, check out [antic](https://www.npmjs.com/package/antic) for lulz!
