import { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const [showMessage, setShowMessage] = (false);

useEffect(() => {
  
}, [seconds]);

const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <Paper elevation={12}>
        <div>
          <span>{displayMinutes}</span>:<span>{displaySeconds}</span>
        </div>
        <div>
          <button>
            {isActive ? 'Pause' : 'Start'}
          </button>
        </div>
      </Paper>
    </div>
  );
}

export default Timer;
