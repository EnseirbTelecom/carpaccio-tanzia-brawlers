const fs = require('fs')

class TvaGenerator {
  constructor (countryCode) {
    this.tva = ''
    this.checkCountry(countryCode)
  }

  checkCountry (countryCode) {
    const file = fs.readFileSync('./ressources/tva', 'utf8')
    const splitFile = file.split(/\r?\n/)
    splitFile.forEach((line, idx) => {
      if (line.includes(countryCode)) {
        const countryDetails = JSON.parse(line)
        this.tva = countryDetails.tva
      }
    })
    if (this.tva.length === 0) {
      throw new Error('Country Code ne correspond à aucun pays!')
    }
  }
}
module.exports = TvaGenerator
