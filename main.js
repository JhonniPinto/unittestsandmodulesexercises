const { simpleInterest, amountPlusInterest, amountPlusCompoundInterest, compoundInterest } = require('./interest')

console.log(simpleInterest(1000, 0.035, 1))

console.log(amountPlusInterest(1000, 0.035, 1))

console.log(amountPlusCompoundInterest(1000, 0.035, 12))

console.log(compoundInterest(1000, 0.035, 12))

