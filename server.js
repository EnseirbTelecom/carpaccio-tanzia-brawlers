const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/id', (req, res) => {
  res.send({ id: 'it340-tanzia_brawlers' })
})

app.post('/bill', (req, res) => {
  const { prices: price, quantities: quantity } = req.body
  if (price === undefined || quantity === undefined || price.length !== quantity.length) { res.send({ error: 'error message' }) } else { res.send({ total: sum(price, quantity) }) }
})

app.listen(3000, () => {
  console.log('Server started !')
})
