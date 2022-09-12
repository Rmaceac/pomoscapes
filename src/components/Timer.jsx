import { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPomo, setIsPomo] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [round, setRound] = useState(1);

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const handleReset = () => {
    setIsActive(false);
    setShowMessage(false);
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
            // logic for when timer runs out
            setIsActive(false);
            setIsPomo(!isPomo);
            if (isPomo) {
              setShowMessage(true);
              setMinutes(5);
              setSeconds(0);
            }
            if (!isPomo) {
              handleReset();
              setRound(round + 1);
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
        { showMessage &&
          <div className='timer-msg'>
            Time for a break!
          </div>
        }
        <div>
          <span>{displayMinutes}</span>:<span>{displaySeconds}</span>
        </div>
        <div>
          <button onClick={handleToggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>Round: {round}</div>
      </Paper>
    </div>
  );
}

export default Timer;
