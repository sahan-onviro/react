var value = null;
console.log(null);
value = "hello";
console.log(value);
function PrintYardSize(house) {
    var _a;
    var Yard = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (Yard === undefined) {
        console.log("no Yard");
    }
    else {
        console.log("".concat(Yard, " sqft"));
    }
}
var home = {
    sqft: 1000,
};
PrintYardSize(home);
var newHome = {
    sqft: 5000,
    yard: {
        sqft: 2000,
    },
};
PrintYardSize(newHome);
// Nullish Coalesencse (??) good when there is no data and need to show another data when no data is found
function printMilage(milage) {
    console.log("milage : ".concat(milage !== null && milage !== void 0 ? milage : "no miloage"));
}
printMilage(50); //50
printMilage(undefined); //no miloage
printMilage(null); //no miloage
// NUll Assertion (!) can be used when loading as undefined is shown
function getValue(value) {
    return value;
}
var values = getValue("asdsad");
console.log(values.length);
