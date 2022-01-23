import { useEffect, useState } from "react";
import stopWatch from "./stopwatch.png";
import Card from "./components/Card";

function App() {
  let defaultTime = { hour: 0, min: 0, sec: 0 };
  let [time, setTime] = useState(defaultTime);
  let [active, setActive] = useState(false);
  let [paused, setPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (active && paused === false) {
      interval = setInterval(incrementFunction, 1);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, paused, time]);

  const incrementFunction = () => {
    let newTime = { hour: time.hour, min: time.min, sec: time.sec + 1 };
    if (newTime.sec > 59) {
      newTime.min = newTime.min + 1;
      newTime.sec = 0;
    }
    if (newTime.min > 59) {
      newTime.hour++;
      newTime.min = 0;
    }
    setTime(newTime);
  };

  const startHandler = () => {
    setActive(true);
    setPaused(false);
  };
  const pauseHandler = () => {
    setActive(false);
    setPaused(true);
  };
  const resetHandler = () => {
    setActive(false);
    setTime(defaultTime);
  };
  return (
    <div className="stopWatchDiv">
      <Card>
        <div className="headerDiv">
          <img id="stopwatchIcon" src={stopWatch} alt="stopwatch_icon" />
          <h1 className="heading">StopWatch</h1>
        </div>
        <div id="stopWatch" className="centerDiv bg-color">
          <p className="time">
            {time.hour}:{time.min}:{time.sec}
          </p>
        </div>
        <div id="inputDiv" className="footerButtons">
          <button type="button" id="startTimer" onClick={startHandler}>
            Start
          </button>
          <button type="button" id="pauseTimer" onClick={pauseHandler}>
            Pause
          </button>
          <button type="button" id="resetTimer" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </Card>
    </div>
  );
}

export default App;
