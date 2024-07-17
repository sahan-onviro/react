const isArmStrong = (num: number): boolean => {
  let data = num.toString().split("");

  const reduce = data.reduce(
    (acc, currentValue) => acc + Math.pow(parseInt(currentValue), data.length),
    0
  );
  console.log;
  if (num === reduce) {
    return true;
  }
  return false;
};
console.log(isArmStrong(8208));

function isAcceptablePassword(password: string): boolean {
  const cond1 = password.length > 6;
  const cond2 = /\d/.test(password);
  const cond3 = /\D/.test(password);
  return [cond1, cond2, cond3].includes(true);
}
console.log(isAcceptablePassword("shortasdsad12321"));

const mmm = "asdsadasd";
console.log(mmm.charAt(0).toUpperCase() + mmm.slice(1) + ".");

function correctSentence(text: string): string {
  // your code here
  if (text.charAt(text.length - 1) === ".") {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  }
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}.`;
}

console.log(correctSentence("greetings, friends"));

function factorial(n: number): number {
  let total = 1;
  for (let i = 1; i < n + 1; i++) {
    total *= i;
  }
  return total;
}
console.log(factorial(4));

function backwardString(value: string): string {
  let str = value.split("");
  let reverseStr = str.reverse().join("");
  return reverseStr;
}

console.log(backwardString("val"));

function digitsMultip(data: number): number {
  let num = 1;
  let length = data.toString().split("");
  for (let i = 0; i < length.length; i++) {
    if (length[i] !== "0") {
      num *= parseInt(length[i]);
    }
  }
  return num;
}

console.log(digitsMultip(123405));

function countOccurrences(mainStr: string, subStr: string): number {
  const spitt = mainStr.split(" ");
  console.log(spitt);
  let num = 0;
  for (let i = 0; i < spitt.length; i++) {
    if (spitt[i].toLowerCase() === subStr.toLowerCase()) {
      num += 1;
    }
  }
  return num;
}

console.log("Example:");
console.log(countOccurrences("hello", "world"));
