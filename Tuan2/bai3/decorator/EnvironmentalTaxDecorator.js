const TaxDecorator = require('./TaxDecorator')

class EnvironmentalTaxDecorator extends TaxDecorator {
  calculate(price) {
    return super.calculate(price) + price * 0.05
  }
}

module.exports = EnvironmentalTaxDecorator
