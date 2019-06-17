const simpleInterest = (C, i, t) => C * i * t

const amountPlusInterest = ({ simpleInterest }) => (C, i, t) => simpleInterest(C, i, t) + C

const amountPlusCompoundInterest = (C, i, t) => {
    const M = C * Math.pow((1 + i),t)
    return parseFloat(M.toFixed(2))
}

const compoundInterest = dependencies => (C, i, t) => {
    const { amountPlusCompoundInterest } = dependencies
    const M = amountPlusCompoundInterest(C, i, t) - C
    return parseFloat(M.toFixed(2))
}

module.exports = {
    simpleInterest,
    amountPlusInterest: amountPlusInterest({ simpleInterest }),
    amountPlusCompoundInterest,
    compoundInterest: compoundInterest({ amountPlusCompoundInterest }),
    pure: { 
        amountPlusInterest, 
        compoundInterest 
    }
}