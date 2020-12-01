function sum (price, quantity) {
  let sum = 0
  price.forEach((element, index) => { sum += element * quantity[index] })
  return sum
}

class BillCalculator {
  constructor (prices, quantities) {
    this.prices = prices
    this.quantities = quantities
    this.test = this.checkParameters()
  }

  checkParameters () {
    const test = { verified: true, error_msg: '' }
    if (this.quantities === undefined || this.prices === undefined) {
      test.verified = false
      test.error_msg = 'Something went wrong .... Please try again !'
    } else if (this.quantities.length === 0) {
      test.verified = false
      test.error_msg = 'Votre panier est vide'
    } else if (this.prices.length !== this.quantities.length) {
      test.verified = false
      test.error_msg = "Prices et quantities doivent avoir le même nombre d'éléments "
    } else {
      this.quantities.forEach((element, index) => {
        if (element < 0) {
          test.verified = false
          test.error_msg = 'Une quantité ne peut pas être négative!'
        } else if (this.prices[index] < 0) {
          test.verified = false
          test.error_msg = 'Le prix ne peut pas être négatif!'
        }
      })
    }
    return test
  }

  billResult () {
    if (this.test.verified) {
      return sum(this.prices, this.quantities)
    } else {
      return this.test.error_msg
    }
  }
}
module.exports = BillCalculator
