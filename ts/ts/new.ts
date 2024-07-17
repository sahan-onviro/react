//Explicit
let firstName: string = "ram";
//implicit
let lastName = "Sht";

//Bad code why bad lack of security in object[] so use interface
// const names: object[] = [];
// names.push({
//   name: "Ram",
//   id: 0,
// });

//Easy way
// interface Person {
//   name: string;
//   id: number;
// }
// const names: Person[] = [];
// names.push({
//   name: "Ram",
//   id: 0,
// });
// names.push({
//   name: "hello",
//   id: 2,
// });
// names.push({
//   name: "new",
//   id: 3,
// });

//Better Way
interface Person {
  id: number;
  name: string;
}
const names: Person[] = [];
let nextId = 0;
function addPerson(name: string): void {
  const person: Person = {
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

const number: readonly number[] = [1, 2, 3, 4];
console.log(number);
// number.push(6) //wont works this this is readonly

//Tuples
let ourDate: [number, string];
ourDate = [7, "Monday"];
ourDate.push("Hello"); //This works as well since i only defined upto to index 1
console.log(ourDate);

//But using readonly
let OUrDays: readonly [string, string];
OUrDays = ["Sunday", "monday"];
// OUrDays.push('Tuesday') //wont works
console.log(OUrDays);

const car: { type: string; year: number } = { type: "Toyota", year: 2024 };
const oldCar: { type: string; year?: number } = { type: "Toyota" };
console.log({ car, oldCar }); //Both works and in 2nd one dueto "?" ?== optional

// Enum(number) //when used in number automatic lly added 1

enum Direction {
  North, //0
  East, //1
  South, //2
  West, //3
}
console.log(Direction);
enum DirectionWithFirst {
  North = 1, //1
  East, //2
  South, //3
  West = 5, //5
}
console.log(DirectionWithFirst);
enum StatusCode {
  NotFound = 404,
  BadRequest = 400,
  Sucess = 200,
}
console.log(StatusCode);

// Enum(string) //just like object

enum DirectionName {
  North = "North",
  East = "Esat",
}
console.log(DirectionName);

//Type Aliases
type CarYear = number;
type CarType = string;
type Car = {
  year: CarYear;
  type: CarType;
};
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const cars: Car = {
  year: carYear,
  type: carType,
};
console.log(cars);

//Interface
interface Rectangle {
  height: number;
  width: number;
}
const rect: Rectangle = {
  width: 50,
  height: 50,
};
console.log(rect);

interface colorRect extends Rectangle {
  color: string;
}
const colRect: colorRect = {
  height: 60,
  width: 60,
  color: "red",
};
console.log(colRect);

//Union type "|"

function print(code: number | string) {
  if (typeof code === "string") {
    console.log(code.toUpperCase());
  } else {
    console.log(code);
  }
}
const printboth = (code: string | number): void => {
  console.log(typeof code === "string" ? code.toUpperCase() : code);
};
print("asdsad");
print(4165456);
