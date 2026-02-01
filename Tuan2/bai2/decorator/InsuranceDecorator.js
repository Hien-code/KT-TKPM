const OrderDecorator = require('./OrderDecorator')

class InsuranceDecorator extends OrderDecorator {
  getCost() {
    return super.getCost() + 30000
  }
}

module.exports = InsuranceDecorator
