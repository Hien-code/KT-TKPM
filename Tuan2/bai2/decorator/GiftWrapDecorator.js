const OrderDecorator = require('./OrderDecorator')

class GiftWrapDecorator extends OrderDecorator {
  getCost() {
    return super.getCost() + 10000
  }
}

module.exports = GiftWrapDecorator
