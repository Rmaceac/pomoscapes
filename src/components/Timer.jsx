import { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  // const [showMessage, setShowMessage] = (false);

const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

useEffect(() => {

}, []);

  return (
    <div>
      <Paper elevation={12}>
        <h1>{displayMinutes}:{displaySeconds}</h1>
      </Paper>
    </div>
  );
}

export default Timer;
