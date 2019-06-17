const interest = require('./interest')

// SIMPLE INTEREST
test('simpleInterest', () => expect(interest.simpleInterest(1000, 0.035, 1)).toBe(35))
test('simpleInterest', () => expect(interest.simpleInterest(1000, 0.035, 0)).toBe(0))
test('simpleInterest', () => expect(interest.simpleInterest(1000, 0.035, 20)).toBe(700))


// AMOUNT PLUS INTEREST
test('amountPlusInterest', () => {
    const simpleInterest = jest.fn()
    simpleInterest.mockReturnValue(35)

    const amountPlusInterest = interest.pure.amountPlusInterest({ simpleInterest })

    expect(amountPlusInterest(1000, 0.035, 1)).toBe(1035)
    expect(simpleInterest.mock.calls[0]).toEqual([1000, 0.035, 1])
})
test('amountPlusInterest', () => {
    const simpleInterest = jest.fn()
    simpleInterest.mockReturnValue(0)

    const amountPlusInterest = interest.pure.amountPlusInterest({ simpleInterest })(1000, 0.035, 0)

    expect(simpleInterest.mock.calls[0]).toEqual([1000, 0.035, 0])
    expect(amountPlusInterest).toBe(1000)
})


// AMOUNT PLUS COMPOUND INTEREST
test('amountPlusCompoundInterest', () => { 
    expect(interest.amountPlusCompoundInterest(1000, 0.035, 12)).toBe(1511.07) 
})
test('amountPlusCompoundInterest', () => { 
    expect(interest.amountPlusCompoundInterest(1000, 0.035, 0)).toBe(1000) 
})


// COMPOUND INTEREST
test('compoundInterest', () => {
    const amountPlusCompoundInterest = jest.fn()
    amountPlusCompoundInterest.mockImplementation(() => 1511.07)

    expect(interest.pure.compoundInterest({ amountPlusCompoundInterest })(1000, 0.035, 12)).toBe(511.07)
    expect(amountPlusCompoundInterest.mock.calls[0]).toEqual([1000, 0.035, 12])
})
test('compoundInterest', () => {
    const amountPlusCompoundInterest = jest.fn()
    amountPlusCompoundInterest.mockImplementation(() => 1000)

    expect(interest.pure.compoundInterest({ amountPlusCompoundInterest })(1000, 0.035, 0)).toBe(0)
    expect(amountPlusCompoundInterest.mock.calls[0]).toEqual([1000, 0.035, 0])
})