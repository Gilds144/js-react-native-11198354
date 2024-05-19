function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square even numbers
        } else {
            return number * 3; // Triple odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if number is even
        } else {
            return str.toLowerCase(); // Lowercase if number is odd
        }
    });
}

module.exports = { processArray, formatArrayStrings };