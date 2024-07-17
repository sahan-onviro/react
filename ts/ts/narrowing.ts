interface Fish {
  type: "fish";
  swim: () => void;
  name?: string;
}
interface Bird {
  type: "bird";
  fly: () => void;
  name?: string;
}
const getPet = (): Fish | Bird => {
  return Math.random() > 0.5
    ? { type: "fish", swim: () => console.log("swiming") }
    : { type: "bird", fly: () => console.log("flying") };
};
const pet = getPet();
const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getPet(), getPet(), getPet()];
console.log(zoo);
// const underWater1: Fish[] = zoo.filter(isFish);
// console.log(underWater1)

// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// console.log(underWater2);

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false; // Exclude Fish named "sharkey"
  return isFish(pet); // Otherwise, check if it's a Fish
});
console.log(underWater3);

interface Shape {
  kind: "cicle" | "square";
  radius?: number;
  sideLength?: number;
}
function handleShape(shape: Shape) {
  if (shape.kind === "cicle") {
    return Math.PI * shape.radius! ** 2;
  }
}

console.log(handleShape({ kind: "cicle", radius: 5 }));
