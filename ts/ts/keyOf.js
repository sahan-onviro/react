var person = {
    name: "Ram",
    age: 50,
};
function printProaaa(person, properties) {
    console.log("properties : ".concat(properties, " = ").concat(person[properties]));
}
printProaaa(person, "age");
function createStringMap(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
var list = createStringMap("hello", "asds");
console.log(list);
