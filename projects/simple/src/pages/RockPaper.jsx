import React, { useEffect, useState } from "react";

const RockPaper = () => {
  const [result, setResult] = useState(null);
  const [random, setRandom] = useState(null);
  const [selected, setSelected] = useState(null);
  const option = [
    {
      id: 1,
      name: "dhunga",
      value: "dhunga",
    },
    { id: 2, name: "kagach", value: "kagach" },
    { id: 3, name: "kaichii", value: "kaichii" },
  ];
  const botSelect = option?.find((item) => item?.id === random);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelected(e.target.option.value); 
    setRandom(Math.floor(Math.random() * 3) + 1);
  };
  const determineResult = () => {
    if (!selected || !botSelect) {
      return;
    }

    if (selected === botSelect.value) { 
      setResult("draw");
      return;
    }

    if (
      (selected === "dhunga" && botSelect.value === "kaichii") ||
      (selected === "kagach" && botSelect.value === "dhunga") ||
      (selected === "kaichii" && botSelect.value === "kagach")
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };
  useEffect(() => {
    determineResult();
  }, [botSelect, selected]);
  return (
    <div>
      <h1>Rock paper scissors</h1>
      <div className="mmm">
        <div className="">
          <h2>{selected}</h2>
          <p>user</p>
        </div>
        <div className="">
          <h2>{botSelect?.name}</h2>
          <p>bot</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <select name="option">
          {option?.map((item, index) => (
            <option value={item?.value} key={index}>
              {item?.name}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
      <div className="result">{result}</div>
    </div>
  );
};

export default RockPaper;
