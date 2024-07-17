var isArmStrong = function (num) {
    var data = num.toString().split("");
    var reduce = data.reduce(function (acc, currentValue) { return acc + Math.pow(parseInt(currentValue), data.length); }, 0);
    console.log;
    if (num === reduce) {
        return true;
    }
    return false;
};
console.log(isArmStrong(8208));
function isAcceptablePassword(password) {
    var cond1 = password.length > 6;
    var cond2 = /\d/.test(password);
    var cond3 = /\D/.test(password);
    return [cond1, cond2, cond3].includes(true);
}
console.log(isAcceptablePassword("shortasdsad12321"));
var mmm = "asdsadasd";
console.log(mmm.charAt(0).toUpperCase() + mmm.slice(1) + ".");
function correctSentence(text) {
    // your code here
    if (text.charAt(text.length - 1) === ".") {
        return "".concat(text.charAt(0).toUpperCase()).concat(text.slice(1));
    }
    return "".concat(text.charAt(0).toUpperCase()).concat(text.slice(1), ".");
}
console.log(correctSentence("greetings, friends"));
function factorial(n) {
    var total = 1;
    for (var i = 1; i < n + 1; i++) {
        total *= i;
    }
    return total;
}
console.log(factorial(4));
function backwardString(value) {
    var str = value.split("");
    var reverseStr = str.reverse().join("");
    return reverseStr;
}
console.log(backwardString("val"));
function digitsMultip(data) {
    var num = 1;
    var length = data.toString().split("");
    for (var i = 0; i < length.length; i++) {
        if (length[i] !== "0") {
            num *= parseInt(length[i]);
        }
    }
    return num;
}
console.log(digitsMultip(123405));
function countOccurrences(mainStr, subStr) {
    var spitt = mainStr.split(" ");
    console.log(spitt);
    var num = 0;
    for (var i = 0; i < spitt.length; i++) {
        if (spitt[i].toLowerCase() === subStr.toLowerCase()) {
            num += 1;
        }
    }
    return num;
}
console.log("Example:");
console.log(countOccurrences("hello", "world"));
