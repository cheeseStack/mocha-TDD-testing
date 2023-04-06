const Calculate = {
    factorial(inputNumber) {
        //  covers when 0 is entered
        if (inputNumber === 0) {
            return 1
        }
        if (typeof inputNumber !== 'number') {
            throw new TypeError('Enter numbers only')
        }
        let total = inputNumber 
        for (let i=inputNumber-1; i>=1; i--) {
           total *= i
        }
        return total
    }
}

module.exports = Calculate;


