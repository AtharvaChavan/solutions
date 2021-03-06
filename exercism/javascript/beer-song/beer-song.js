const { mapValues, last, range } = require('lodash/fp')

const bridge = [
  'Go to the store and buy some more',
  'Take it down and pass it around',
  'Take one down and pass it around'
]

const format = ({ n, nUpper, m, pluralN, pluralM, bridge}) =>
  `${nUpper} bottle${pluralN} of beer on the wall, ${n} bottle${pluralN} of beer.
${bridge}, ${m} bottle${pluralM} of beer on the wall.
`

class BeerSong {
  verse (n) {
    const params = mapValues(xs => n < xs.length ? xs[n] : last(xs), {
      n: ['no more', n],
      nUpper: ['No more', n],
      m: [99, 'no more', n - 1],
      pluralN: ['s', '', 's'],
      pluralM: ['s', 's', '', 's'],
      bridge: bridge
    })
    return format(params)
  }
  sing (a, b=0) {
    return range(a, b - 1).map(this.verse).join('\n')
  }
}

module.exports = BeerSong
