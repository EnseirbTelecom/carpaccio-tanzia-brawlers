const BillCalculator = require('./bill.js')

function discountCalculator (sum, discount) {
  switch (discount) {
    case 'NO_DISCOUNT':
      return sum
    case 'FLAT_DISCOUNT':
      return sum * 0.7
    case 'PROGRESSIVE_DISCOUNT':
      if (sum >= 50000) {
        return sum * 0.85
      } else if (sum >= 10000) {
        return sum * 0.9
      } else if (sum >= 7000) {
        return sum * 0.93
      } else if (sum >= 5000) {
        return sum * 0.95
      } else if (sum >= 1000) {
        return sum * 0.97
      }
      return sum
    case 'FIXED_DISCOUNT':
      if (sum >= 1000) {
        return sum - 200
      } else if (sum >= 400) {
        return sum - 50
      } else if (sum >= 100) {
        return sum - 10
      }
      return sum
    default:
      throw new Error('Discount type not recognized')
  }
}

class BillDiscount {
  constructor (price, quantity, countryCode, discount) {
    try {
      this.bill = new BillCalculator(price, quantity, countryCode)
      if (discount) {
        this.result = discountCalculator(this.bill.result, discount)
      } else {
        this.result = this.bill.result
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }
}
module.exports = BillDiscount
