function convertToWords() {
    let num = document.getElementById('numberInput').value;
    let result = numberToWords(num);
    document.getElementById('result').innerText = result;
}

function numberToWords(number) {
    const singleDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const twoDigits = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teenDigits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (number < 10) return singleDigits[number];
    if (number >= 10 && number < 20) return teenDigits[number - 10];
    if (number >= 20 && number < 100) {
        return twoDigits[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + singleDigits[number % 10] : "");
    }
    if (number >= 100 && number < 1000000000000000000000) {
        return singleDigits[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + numberToWords(number % 100) : "");
    }
    return "Number out of range";
}


