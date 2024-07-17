// Partial makes all optioonal
var Honda = {
    year: 2022,
};
console.log("partial", Honda);
//Required make all required even if optional ? is there
var Hero = {
    year: 2010,
    model: "hero",
    milage: "50 mil",
};
console.log("requird", Hero);
//Omit remove the key listed
var Suzuki = {
    model: "suzuki",
};
console.log("omit", Suzuki);
//Pick only the one listed
var HeroHonda = {
    year: 1997,
};
console.log("pick", HeroHonda);
// Readonly
var HHH = {
    year: 2000,
    model: "HHH",
};
// HHH.milage = 25; error
console.log("Readonly", HHH);
// Record is type of shortcut
var Person = {
    age: 1,
    name: "Alice",
};
console.log("Record", Person);
// const neededValue: Exclude<Value, number> = 50; error since number have been removed
var neededValue = "asdsd";
console.log("Exclude", neededValue);
var Point = {
    x: 45,
    y: 50,
};
console.log("ReturnType", Point);
