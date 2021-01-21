/* eslint-env jest */

const CurrencyConverter = require('../modules/currencyConverter.js')

test('"prices": [10,20], "quantities" : [1,2], "country" : "FR", "currency": "USD" ', () => {
  new CurrencyConverter().getResult([10, 20], [1, 2], 'FR', null, 'USD', function (result) { expect(result).toBe(72.948) }, function (error) { expect(error).toBeInstanceOf(Error) })
})
test('"prices": [10,20], "quantities" : [1,2], "country" : "FR"', () => {
  new CurrencyConverter().getResult([10, 20], [1, 2], 'FR', null, null, function (result) { expect(result).toBe(60) }, function (error) { expect(error).toBeInstanceOf(Error) })
})
test('"prices": [-10,20], "quantities" : [1,2], "country" : "FR", "currency": "USD"', () => {
  expect(() => new CurrencyConverter().getResult([-10, 20], [1, 2], 'FR', null, 'USD', function (result) { expect(result).toBe(60) }, function (error) { expect(error).toBeInstanceOf(Error) })).toThrow()
})
test('"prices": [10,20], "quantities" : [1,2], "country" : "FR", "currency": "U"', () => {
  new CurrencyConverter().getResult([10, 20], [1, 2], 'FR', null, 'U', function (result) { expect(result).toBe(60) }, function (error) { expect(error.message).toBe('Something went wrong with the API request') })
})
