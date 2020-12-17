/* eslint-env jest */

const BillDiscount = require('../modules/billDiscount.js')

test('prices : [10,20] quantities : [1,2] country : "FR" discount : "NO_DISCOUNT" ', () => {
  const bill = new BillDiscount([10, 20], [1, 2], 'FR', 'NO_DISCOUNT')
  expect(bill.result).toBe(60)
})
test('prices : [10,20] quantities : [1,2] country : "FR"', () => {
  const bill = new BillDiscount([10, 20], [1, 2], 'FR', undefined)
  expect(bill.result).toBe(60)
})
test('prices : [10,20] quantities : [] country : "FR" discount : "NO_DISCOUNT" ', () => {
  expect(() => new BillDiscount([10, 20], [], 'FR', 'NO_DISCOUNT')).toThrow()
})
test('prices : [10,20] quantities : [1,2] country : "FR" discount : "FALSE_DISCOUNT" ', () => {
  expect(() => new BillDiscount([10, 20], [1, 2], 'FR', 'FALSE_DISCOUNT')).toThrow()
})
test('prices : [10,20] quantities : [1,2] country : "FR" discount : "FLAT_DISCOUNT" ', () => {
  const bill = new BillDiscount([10, 20], [1, 2], 'FR', 'FLAT_DISCOUNT')
  expect(bill.result).toBe(42)
})
test('prices : [10,20] quantities : [1,2] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([10, 20], [1, 2], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(60)
})
test('prices : [50000] quantities : [1] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([50000], [1], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(51000)
})
test('prices : [10000] quantities : [1] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([10000], [1], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(10800)
})
test('prices : [7000] quantities : [1] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([7000], [1], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(7812)
})
test('prices : [5000] quantities : [1] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([5000], [1], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(5700)
})
test('prices : [1000] quantities : [1] country : "FR" discount : "PROGRESSIVE_DISCOUNT"', () => {
  const bill = new BillDiscount([1000], [1], 'FR', 'PROGRESSIVE_DISCOUNT')
  expect(bill.result).toBe(1164)
})
test('prices : [10,20] quantities : [1,2] country : "FR" discount : "FIXED_DISCOUNT"', () => {
  const bill = new BillDiscount([10, 20], [1, 2], 'FR', 'FIXED_DISCOUNT')
  expect(bill.result).toBe(60)
})
test('prices : [1000] quantities : [1] country : "FR" discount : "FIXED_DISCOUNT"', () => {
  const bill = new BillDiscount([1000], [1], 'FR', 'FIXED_DISCOUNT')
  expect(bill.result).toBe(1000)
})
test('prices : [400] quantities : [1] country : "FR" discount : "FIXED_DISCOUNT"', () => {
  const bill = new BillDiscount([400], [1], 'FR', 'FIXED_DISCOUNT')
  expect(bill.result).toBe(430)
})
test('prices : [100] quantities : [1] country : "FR" discount : "FIXED_DISCOUNT"', () => {
  const bill = new BillDiscount([100], [1], 'FR', 'FIXED_DISCOUNT')
  expect(bill.result).toBe(110)
})
