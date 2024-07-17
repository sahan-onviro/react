function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//last? means ? is optional

function printName(obj: { first: string; last?: string }) {
  console.log(`first : ${obj?.first} ${obj.last ? `,last: ${obj.last}` : ""}`);
  console.log(obj.last?.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


function printId(id: number | string) {
    console.log("Your ID is: " + id);
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
      } else {
        // Here, id is of type 'number'
        console.log(id);
      }
  }
  // OK
  printId(101);
  // OK
  printId("hello");
  // Error
//   printId({ myID: 22342 });


type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoordi(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoordi({ x: 100, y: 100 });

  interface Points {
    x: number;
    y: number;
  }
   
  function printCoordii(pt: Points) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoordii({ x: 1001, y: 1001 });

//   const x = "hello" as number;
const x = "hello" as any as number;
console.log(x)


declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
