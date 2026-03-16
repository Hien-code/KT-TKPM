const TaxStrategy = require('./TaxStrategy')

class SpecialConsumptionTax extends TaxStrategy {
  calculate(price) {
    return price * 0.2
  }
}

module.exports = SpecialConsumptionTax
