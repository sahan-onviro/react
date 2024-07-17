interface Bike {
  year: number;
  model: string;
  milage?: number | string;
}


// Partial makes all optioonal
const Honda: Partial<Bike> = {
  year: 2022,
};
console.log("partial", Honda);



//Required make all required even if optional ? is there
const Hero: Required<Bike> = {
  year: 2010,
  model: "hero",
  milage: "50 mil",
};
console.log("requird", Hero);



//Omit remove the key listed
const Suzuki: Omit<Bike, "milage" | "year"> = {
  model: "suzuki",
};
console.log("omit", Suzuki);



//Pick only the one listed
const HeroHonda: Pick<Bike, "year" | "milage"> = {
  year: 1997,
};
console.log("pick", HeroHonda);



// Readonly
const HHH: Readonly<Bike> = {
  year: 2000,
  model: "HHH",
};
// HHH.milage = 25; error

console.log("Readonly", HHH);




// Record is type of shortcut
const Person: Record<string, number | string> = {
  age: 1,
  name: "Alice",
};
console.log("Record", Person);



//Exclude remove the TYPE from union ie type
type Value = string | number | boolean;
// const neededValue: Exclude<Value, number> = 50; error since number have been removed
const neededValue: Exclude<Value, number> = "asdsd";
console.log("Exclude", neededValue);



// ReturnType extract the return of a function
type pinPoint = () => { x: number; y: number };

const Point: ReturnType<pinPoint> = {
  x: 45,
  y: 50,
};
console.log("ReturnType", Point);


