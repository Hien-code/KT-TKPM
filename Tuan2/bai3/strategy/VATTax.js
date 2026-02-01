const TaxStrategy = require('./TaxStrategy')

class VATTax extends TaxStrategy {
  calculate(price) {
    return price * 0.1
  }
}

module.exports = VATTax
