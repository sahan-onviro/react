function getTime() {
    return new Date();
}
console.log(getTime());
// void retrun
function printHello() {
    console.log("hello");
}
printHello();
// optioonal parmeter
var calcMul = function (a, b, c) {
    return a * b + (c || 0);
};
console.log(calcMul(5, 6, 10)), "calMul";
// Default Parameter like power
var powerOf = function (value, power) {
    if (power === void 0) { power = 2; }
    return Math.pow(value, power);
};
console.log(powerOf(5), "power of");
// Named parameter
var divide = function (_a) {
    var a = _a.a, b = _a.b;
    return a / b;
};
console.log(divide({ a: 10, b: 5 }));
var NegateFuc = function (value) { return value * -1; };
console.log(NegateFuc(6));
// Type Casting
var x = "hello";
// console.log((x).length); //error due to unknown
// AS way
console.log(x.length);
// <> way
console.log(x.length);
// Force casting
// console.log(((x as unknown) as number).length);
// generic function
var genericFun = function (v1, v2) {
    return [v1, v2];
};
console.log(genericFun(6, "hello"));
// console.log(genericFun<number, number>(6, "hello")); error
console.log(genericFun(6, 5555));
var wrapppedValues = { value: 6 };
console.log(wrapppedValues);
var wrappedString = { value: "lasdosadosad" };
console.log(wrappedString);
var limitedGeneric = function (v1, v2) {
    return [v1, v2];
};
// console.log(limitedGeneric(1,2)) error
console.log(limitedGeneric("sadsad", 2));
console.log(limitedGeneric(true, false));
function replaceAll(mainText, target, repl) {
    // const spilter = mainText.split(" ");
    // for (let i = 0; i < spilter.length; i++) {
    //   if (spilter[i] === target) {
    //     spilter[i].replace(spilter[i],repl);
    //   }
    // }
    // console.log(spilter);
    // const joinner = spilter.join(" ");
    // return joinner;
    //  does works bt
    return mainText.split(target).join(repl);
}
console.log("Example:");
console.log(replaceAll("hello world", "world", "TypeScript"));
var printall = function (word) {
    console.log(word);
    return word;
};
printall("asdsa");
