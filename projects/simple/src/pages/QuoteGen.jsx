import React, { useEffect, useState } from "react";

const QuoteGen = () => {
  const [data, setData] = useState("");

  const url = "https://api.quotable.io/random";
  const fetchData = async () => {
    const response = await fetch(url);
    const quotes = await response.json();
    console.log(quotes);
    setData(quotes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleGenerate =()=>{
    fetchData();
  }
  return (
    <div>
      <article>
        <h1>{data.author}</h1>
        <p>{data.content}</p>
      </article>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default QuoteGen;
