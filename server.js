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
  const BillDiscount = modules.billDiscount
  const { prices: price, quantities: quantity, country: countryCode, discount: discountType } = req.body
  try {
    const bill = new BillDiscount(price, quantity, countryCode, discountType)
    res.send({ result: bill.result })
  } catch (e) {
    res.send({ error: e.message })
  }
})

app.listen(3000, () => {
  console.log('Server started !')
})
