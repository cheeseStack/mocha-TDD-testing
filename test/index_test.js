const assert = require('assert')

const Calculate = require('../index.js')


describe('Calculate', () => {
    describe('.factorial', () => {
        it('test if the output of 5! is 120', () => {
            // setup 
            const expectedResult = 120
            const inputNumber = 5

            // exercise
            const result = Calculate.factorial(5)

            // verify

            assert.equal(expectedResult, result)
        });

        it('test if the output of 3! is 6', () => {
            // setup
            const expectedResult = 6
            const inputNumber = 3 

            // exercise
            const result = Calculate.factorial(3)

            // verify
            assert.equal(expectedResult, result)
        });

        it('test if the output of 6! is 720', () => {
            // setup
            const expectedResult = 720
            const inputNumber = 6

            // exercise
            const result = Calculate.factorial(inputNumber)

            // verify
            assert.strictEqual(expectedResult, result)
        });

        it('test if the output of 0! is 1', () => {
            // setup
            const expectedResult = 1
            const inputNumber = 0

            // exercise
            const result = Calculate.factorial(0)

            // verify
            assert.strictEqual(expectedResult, result)
        });
        it('checks if an error is thrown when a string is entered', () => {
            // setup
            const expectedResult = TypeError
            const inputString = '10'

            // exercise
            const result = () => {
                Calculate.factorial(inputString)
            }

            // verify
            assert.throws(result, expectedResult )
        })

    });
});