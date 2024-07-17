import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [timerCount, setTimerCount] = useState(0);
  const [pause, setPause] = useState(false);
  const [pauseCount, setPauseCount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(e.target.timer.value);
    console.log(e.target.timer.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
        setTimerCount(count);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  const handlePause = () => {
    setPause((prevPause) => {
      const newPause = !prevPause;
      if (newPause) {
        setPauseCount(count);
        setTimeout(() => {
          setCount(0);
        }, 1000);
      } else {
        setCount(pauseCount);
      }
      return newPause;
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="number" name="timer" min={10} />
        <button type="submit">sumbit</button>
        <button type="button" onClick={handlePause}>
          {pause ? "play" : "pause"}
        </button>
      </form>
      <h2>count: {timerCount}</h2>
    </div>
  );
};

export default Countdown;
