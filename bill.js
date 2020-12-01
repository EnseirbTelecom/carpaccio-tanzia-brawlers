function sum (price, quantity) {
    let sum = 0
    price.forEach((element, index) => { sum += element * quantity[index] })
    return sum
}

class billCalculator {
    constructor (prices, quantities) {
        this.prices = prices;
        this.quantities = quantities;
    }

     () {
        
    }
}