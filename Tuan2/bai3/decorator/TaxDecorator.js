class TaxDecorator {
  constructor(taxCalculator) {
    this.taxCalculator = taxCalculator
  }

  calculate(price) {
    return this.taxCalculator.calculate(price)
  }
}

module.exports = TaxDecorator
