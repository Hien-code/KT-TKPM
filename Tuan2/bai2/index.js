const Order = require('./Order')
const NormalShipping = require('./strategy/NormalShipping')
const ExpressShipping = require('./strategy/ExpressShipping')
const InsuranceDecorator = require('./decorator/InsuranceDecorator')
const GiftWrapDecorator = require('./decorator/GiftWrapDecorator')

// Tạo đơn hàng
let order = new Order(100000)

// Strategy
order.setShippingStrategy(new ExpressShipping())

// State
order.nextState()
order.nextState()

// Decorator
order = new InsuranceDecorator(order)
order = new GiftWrapDecorator(order)

console.log('Tổng tiền đơn hàng:', order.getCost())
