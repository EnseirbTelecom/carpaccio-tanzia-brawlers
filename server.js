const express = require('express')
const bodyParser = require('body-parser')
const modules = require('./modules')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/id', (req, res) => {
  res.send({ id: 'it340-tanzia_brawlers' })
})

app.post('/bill', (req, res) => {
  const CurrencyConverter = modules.currencyConverter
  const { prices: price, quantities: quantity, country: countryCode, discount: discountType, currency: currencyCode } = req.body
  try {
    new CurrencyConverter().getResult(price, quantity, countryCode, discountType, currencyCode, (data) => {
      res.send({ result: data })
    }, (e) => { res.send({ error: e.message }) }
    )
  } catch (e) {
    res.send({ error: e.message })
  }
})

app.listen(3000, () => {
  console.log('Server started !')
})
