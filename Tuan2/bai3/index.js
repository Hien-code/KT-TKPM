const Product = require('./Product')
const ExportState = require('./state/ExportState')
const VATTax = require('./strategy/VATTax')
const SpecialConsumptionTax = require('./strategy/SpecialConsumptionTax')
const EnvironmentalTaxDecorator = require('./decorator/EnvironmentalTaxDecorator')

// Sản phẩm giá 1 triệu
const product = new Product(1_000_000)

// State
product.setState(new ExportState())

// Strategy
let taxCalculator = new VATTax()

// Decorator
taxCalculator = new EnvironmentalTaxDecorator(taxCalculator)

// Áp dụng
product.setTaxStrategy(taxCalculator)

console.log('Thuế phải trả:', product.calculateTax())
