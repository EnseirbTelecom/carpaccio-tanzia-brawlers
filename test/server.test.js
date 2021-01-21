/* eslint-env jest */

const fetch = require('node-fetch')

const url = 'http://localhost:3000/bill'
test('"prices": [10,20], "quantities" : [1,2], "country" : "FR", "currency": "USD" ', () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prices: [10, 20],
      quantities: [1, 2],
      country: 'FR',
      discount: 'FLAT_DISCOUNT',
      currency: 'USD'
    })
  }).then((res) => {
    res.json().then(data => {
      expect(data.result).toBe(51.0636)
    })
  })
})

test('"prices": [10,20], "quantities" : [1,2], "country" : "FR", "currency": "USD" ', () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prices: [-10, 20],
      quantities: [1, 2],
      country: 'FR',
      discount: 'FLAT_DISCOUNT',
      currency: 'USD'
    })
  }).then((res) => {
    res.json().then(data => {
      expect(data.error).toBe('Le prix ne peut pas être négatif!')
    })
  })
})
