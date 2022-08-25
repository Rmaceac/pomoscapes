// import { useState, useEffect } from 'react';
import { useTimer } from 'reactjs-countdown-hook';
import Paper from "@mui/material/Paper";

const Timer = () => {
  // const [minutes, setMinutes] = useState(25);
  // const [seconds, setSeconds] = useState(0);
  // const [showMessage, setShowMessage] = (false);

// useEffect(() => {
  // 
// }, [seconds]);

const handleTimerFinish = () => {
  alert("Time is up!");
}

const { 
  isActive,
  counter,
  seconds,
  minutes,
  hours,
  pause,
  resume,
  reset
} = useTimer (120, handleTimerFinish);

// const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
// const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <Paper elevation={12}>
        <div>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div>
          <button onClick={() => (isActive ? pause() : resume())}>
            {isActive ? 'Pause' : 'Resume'}
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </Paper>
    </div>
  );
}

export default Timer;
