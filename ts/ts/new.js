//Explicit
var firstName = "ram";
//implicit
var lastName = "Sht";
var names = [];
var nextId = 0;
function addPerson(name) {
    var person = {
        name: name,
        id: nextId++,
    };
    names.push(person);
}
addPerson("Ram");
addPerson("Shyam");
addPerson("Sita");
console.log(names);
//Readonly
var number = [1, 2, 3, 4];
console.log(number);
// number.push(6) //wont works this this is readonly
//Tuples
var ourDate;
ourDate = [7, "Monday"];
ourDate.push("Hello"); //This works as well since i only defined upto to index 2
console.log(ourDate);
//But using readonly
var OUrDays;
OUrDays = ["Sunday", "monday"];
// OUrDays.push('Tuesday') //wont works
console.log(OUrDays);
var car = { type: "Toyota", year: 2024 };
var oldCar = { type: "Toyota" };
console.log({ car: car, oldCar: oldCar }); //Both works and in 2nd one dueto "?" ?== optional
// Enum(number) //when used in number automatic lly added 1
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction);
var DirectionWithFirst;
(function (DirectionWithFirst) {
    DirectionWithFirst[DirectionWithFirst["North"] = 1] = "North";
    DirectionWithFirst[DirectionWithFirst["East"] = 2] = "East";
    DirectionWithFirst[DirectionWithFirst["South"] = 3] = "South";
    DirectionWithFirst[DirectionWithFirst["West"] = 5] = "West";
})(DirectionWithFirst || (DirectionWithFirst = {}));
console.log(DirectionWithFirst);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Sucess"] = 200] = "Sucess";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode);
// Enum(string) //just like object
var DirectionName;
(function (DirectionName) {
    DirectionName["North"] = "North";
    DirectionName["East"] = "Esat";
})(DirectionName || (DirectionName = {}));
console.log(DirectionName);
var carYear = 2001;
var carType = "Toyota";
var cars = {
    year: carYear,
    type: carType,
};
console.log(cars);
var rect = {
    width: 50,
    height: 50,
};
console.log(rect);
var colRect = {
    height: 60,
    width: 60,
    color: "red",
};
console.log(colRect);
//Union type "|"
function print(code) {
    if (typeof code === "string") {
        console.log(code.toUpperCase());
    }
    else {
        console.log(code);
    }
}
print('asdsad');
print(4165456);
