interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Ram",
  age: 50,
};

function printProaaa(person: Person, properties: keyof Person) {
  console.log(`properties : ${properties} = ${person[properties]}`);
}
printProaaa(person, "age");

type StringMap = { [key: string]: unknown };

function createStringMap(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
let list = createStringMap("hello", "asds");
console.log(list);
