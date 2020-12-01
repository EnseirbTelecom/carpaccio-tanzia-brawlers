/* eslint-env jest */

const BillCalculator = require('../modules/bill.js')

test('prices : [20,10] quantities : [2,2] ', () => {
  const bill = new BillCalculator([20, 10], [2, 2])
  expect(bill.result).toBe(60)
})
test('prices: undefined quantities : [2,2]', () => {
  expect(() => new BillCalculator(undefined, [2, 2])).toThrow()
})
test('prices: [20,10] quantities : undefined', () => {
  expect(() => new BillCalculator([20, 10], undefined)).toThrow()
})
test('prices: [20,10] quantities : [10]', () => {
  expect(() => new BillCalculator([20, 10], [10])).toThrow()
})
test('prices: [20,10] quantities : []', () => {
  expect(() => new BillCalculator([20, 10], [])).toThrow()
})
test('prices: [] quantities : [20,10]', () => {
  expect(() => new BillCalculator([], [20, 10])).toThrow()
})
test('prices: [-10, 20] quantities : [20,10]', () => {
  expect(() => new BillCalculator([-10, 20], [20, 10])).toThrow()
})
test('prices: [12, 13] quantities : [20, -10]', () => {
  expect(() => new BillCalculator([12, 13], [20, -10])).toThrow()
})
