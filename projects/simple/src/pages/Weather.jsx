import React from "react";

const Weather = () => {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 6, 7, 9, 10];
  let c = [];
  c = a.filter((item) => b.includes(item));
  console.log(c)
  c = a.map((item) => item * 2);
  console.log(c)
  for (let i = 0; i < a.length; i++) {
    let num;
    num = a[i] * 3;
    c.push(num);
  }
  console.log(c);
  return <div>Weather</div>;
};

export default Weather;
