import { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isPomo, setIsPomo] = useState(true);
  // const [showMessage, setShowMessage] = (false);

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  }

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        clearInterval(interval);  
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setIsActive(false);
            setIsPomo(!isPomo);
            if (isPomo) {
              setMinutes(0);
              setSeconds(7);
            }
            if (!isPomo) {
              handleReset();
            }
          }
        }
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000)

    }
    
  }, [seconds, isActive]);

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <Paper elevation={12}>
        <div>
          <span>{displayMinutes}</span>:<span>{displaySeconds}</span>
        </div>
        <div>
          <button onClick={handleToggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </Paper>
    </div>
  );
}

export default Timer;
