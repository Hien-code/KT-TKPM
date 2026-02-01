class TaxStrategy {
  calculate(price) {
    throw new Error('calculate() must be implemented')
  }
}

module.exports = TaxStrategy
