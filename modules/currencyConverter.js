const fetch = require('node-fetch')
const BillDiscount = require('./billDiscount.js')

async function currencyConvert (sum, currencyCode, callback) {
  const url = 'https://api.exchangeratesapi.io/latest?symbols=' + currencyCode
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => {
    if (res.status === 200) {
      res.json().then(data => {
        const changeRate = data.rates[currencyCode]
        const result = sum * changeRate
        callback(result)
      })
    } else {
      throw new Error('Something went wrong with the API request')
    }
  }).catch((e) => {
    throw new Error(e.message)
  })
}
class CurrencyConverter {
  constructor () {
    this.bill = null
    this.result = null
  }

  getResult (price, quantity, countryCode, discountType, currencyCode, callback, errorCallback) {
    try {
      this.bill = new BillDiscount(price, quantity, countryCode, discountType)
      if (currencyCode) {
        currencyConvert(this.bill.result, currencyCode, callback).catch((e) => { errorCallback(e) })
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
