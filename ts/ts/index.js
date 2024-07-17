function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//last? means ? is optional
function printName(obj) {
    var _a;
    console.log("first : ".concat(obj === null || obj === void 0 ? void 0 : obj.first, " ").concat(obj.last ? ",last: ".concat(obj.last) : ""));
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function printId(id) {
    console.log("Your ID is: " + id);
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// OK
printId(101);
// OK
printId("hello");
// Exactly the same as the earlier example
function printCoordi(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordi({ x: 100, y: 100 });
function printCoordii(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordii({ x: 1001, y: 1001 });
//   const x = "hello" as number;
var x = "hello";
console.log(x);
var req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
