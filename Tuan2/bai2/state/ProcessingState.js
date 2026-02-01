const OrderState = require('./OrderState')

class ProcessingState extends OrderState {
  handle(order) {
    console.log('Đơn hàng đang xử lý → Đã giao')
    order.setState(require('./DeliveredState'))
  }
}

module.exports = ProcessingState
