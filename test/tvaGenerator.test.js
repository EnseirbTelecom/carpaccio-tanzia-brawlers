/* eslint-env jest */

const TvaGenerator = require('../modules/tvaGenerator.js')

test('country : "FR" tva expected : "0.2" ', () => {
  const tvaGen = new TvaGenerator('FR')
  expect(tvaGen.tva).toBe('0.20')
})
test('country : "TN" result expected : error ', () => {
  expect(() => new TvaGenerator('TN').toThrow())
})
