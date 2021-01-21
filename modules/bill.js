const TvaGenerator = require('./tvaGenerator.js')


function sum (price, quantity, tva) {
  let sum = 0
  price.forEach((element, index) => { sum += element * quantity[index] })
  sum = sum * (1 + parseFloat(tva))
  return sum
}

class BillCalculator {
  constructor (prices, quantities, countryCode) {
    this.prices = prices
    this.quantities = quantities
    this.countryCode = countryCode
    this.tva = 0
    this.checkParameters()
    this.result = sum(this.prices, this.quantities, this.tva)
  }

  checkParameters () {
    if (this.quantities === undefined || this.prices === undefined || this.countryCode === undefined) {
      throw new Error('Something went wrong .... Please try again !')
    } else if (this.quantities.length === 0) {
      throw new Error('Votre panier est vide !')
    } else if (this.prices.length === 0) {
      throw new Error('Aucun prix communiqué !')
    } else if (this.prices.length !== this.quantities.length) {
      throw new Error("Prices et quantities doivent avoir le même nombre d'éléments ")
    } else {
      this.quantities.forEach((element, index) => {
        if (element < 0) {
          throw new Error('Une quantité ne peut pas être négative!')
        } else if (this.prices[index] < 0) {
          throw new Error('Le prix ne peut pas être négatif!')
        }
      })
    }
    try {
      const tvaGen = new TvaGenerator(this.countryCode)
      this.tva = tvaGen.tva
    } catch (e) {
      throw new Error(e.message)
    }
  }
}
module.exports = BillCalculator
