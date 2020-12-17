/* eslint-env jest */

const BillCalculator = require('../modules/bill.js')

test('prices : [10,20] quantities : [1,2] country : "FR" ', () => {
  const bill = new BillCalculator([10, 20], [1, 2], 'FR')
  expect(bill.result).toBe(60)
})
test('prices: undefined quantities : [2,2] country : "FR"', () => {
  expect(() => new BillCalculator(undefined, [2, 2], 'FR')).toThrow()
})
test('prices: [20,10] quantities : undefined country : "FR"', () => {
  expect(() => new BillCalculator([20, 10], undefined, 'FR')).toThrow()
})
test('prices: [20,10] quantities : [2,2] country : undefined', () => {
  expect(() => new BillCalculator([20, 10], [2, 2], undefined)).toThrow()
})
test('prices: [20,10] quantities : [10] country : "FR" ', () => {
  expect(() => new BillCalculator([20, 10], [10], 'FR')).toThrow()
})
test('prices: [20,10] quantities : [] country : "FR" ', () => {
  expect(() => new BillCalculator([20, 10], [], 'FR')).toThrow()
})
test('prices: [] quantities : [20,10] country : "FR"', () => {
  expect(() => new BillCalculator([], [20, 10], 'FR')).toThrow()
})
test('prices: [-10, 20] quantities : [20,10] country : "FR" ', () => {
  expect(() => new BillCalculator([-10, 20], [20, 10], 'FR')).toThrow()
})
test('prices: [12, 13] quantities : [20, -10] country : "FR" ', () => {
  expect(() => new BillCalculator([12, 13], [20, -10], 'FR')).toThrow()
})
