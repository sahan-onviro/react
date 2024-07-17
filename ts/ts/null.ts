let value: string | undefined | null = null;
console.log(null);
value = "hello";
console.log(value);

// optional Chaining (?)
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function PrintYardSize(house: House) {
  const Yard = house.yard?.sqft;
  if (Yard === undefined) {
    console.log("no Yard");
  } else {
    console.log(`${Yard} sqft`);
  }
}
let home: House = {
  sqft: 1000,
};
PrintYardSize(home);
let newHome: House = {
  sqft: 5000,
  yard: {
    sqft: 2000,
  },
};

PrintYardSize(newHome);







// Nullish Coalesencse (??) good when there is no data and need to show another data when no data is found
function printMilage(milage: number | null | undefined) {
  console.log(`milage : ${milage ?? "no miloage"}`);
}
printMilage(50); //50
printMilage(undefined); //no miloage
printMilage(null); //no miloage









// NUll Assertion (!) can be used when loading as undefined is shown

function getValue(value: string | null | undefined) {
  return value;
}
let values = getValue("asdsad");

console.log(values!.length);
