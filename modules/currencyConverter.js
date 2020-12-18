const fetch = require('node-fetch')
const BillDiscount = require('./billDiscount.js')

function currencyConvert (sum, currencyCode, callback) {
  const url = 'https://api.exchangeratesapi.io/latest?symbols=' + currencyCode
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.status === 200) {
      res.json().then(data => {
        const changeRate = data.rates[currencyCode]
        const result = sum * changeRate
        callback(result)
        return result
      })
    } else {
      return null
    }
  })
}
class CurrencyConverter {
  constructor () {
    this.bill = null
    this.result = null
  }

  getResult (price, quantity, countryCode, discountType, currencyCode, callback) {
    try {
      this.bill = new BillDiscount(price, quantity, countryCode, discountType)
      if (currencyCode) {
        this.result = currencyConvert(this.bill.result, currencyCode, callback)
        if (!this.result) {
          throw new Error('Something went wrong')
        }
      } else {
        this.result = this.bill.result
        callback(this.result)
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

module.exports = CurrencyConverter
