function getTime(): any {
  return new Date();
}
console.log(getTime());

// void retrun
function printHello(): void {
  console.log("hello");
}
printHello();

// optioonal parmeter
const calcMul = (a: number, b: number, c?: number): number => {
  return a * b + (c || 0);
};
console.log(calcMul(5, 6, 10)), "calMul";

// Default Parameter like power
const powerOf = (value: number, power: number = 2): number => {
  return value ** power;
};
console.log(powerOf(5), "power of");

// Named parameter
const divide = ({ a, b }: { a: number; b: number }): number => {
  return a / b;
};

console.log(divide({ a: 10, b: 5 }));

// with type Alias
type Negate = (value: number) => number;

const NegateFuc: Negate = (value) => value * -1;
console.log(NegateFuc(6));

// Type Casting

let x: unknown = "hello";

// console.log((x).length); //error due to unknown
// AS way
console.log((x as string).length);
// <> way
console.log((<string>x).length);

// Force casting

// console.log(((x as unknown) as number).length);

// generic function
const genericFun = <N, S>(v1: N, v2: S): [N, S] => {
  return [v1, v2];
};
console.log(genericFun(6, "hello"));
// console.log(genericFun<number, number>(6, "hello")); error
console.log(genericFun<number, number>(6, 5555));

// Type Alias
type wrappped<T> = { value: T };
const wrapppedValues: wrappped<number> = { value: 6 };
console.log(wrapppedValues);
const wrappedString: wrappped<string> = { value: "lasdosadosad" };
console.log(wrappedString);

const limitedGeneric = <N extends string | boolean, S extends number | boolean>(
  v1: N,
  v2: S
): [N, S] => {
  return [v1, v2];
};
// console.log(limitedGeneric(1,2)) error
console.log(limitedGeneric("sadsad", 2));
console.log(limitedGeneric(true, false));

function replaceAll(mainText: string, target: string, repl: string): string {
  // const spilter = mainText.split(" ");
  // for (let i = 0; i < spilter.length; i++) {
  //   if (spilter[i] === target) {
  //     spilter[i].replace(spilter[i],repl);
  //   }
  // }
  // console.log(spilter);
  // const joinner = spilter.join(" ");
  // return joinner;
  //  does works bt
  return mainText.split(target).join(repl);
}

console.log("Example:");
console.log(replaceAll("hello world", "world", "TypeScript"));

const printall = (word: string): string => {
  console.log(word);
  return word;
};
printall("asdsa");
