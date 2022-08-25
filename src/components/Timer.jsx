import { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  // const [showMessage, setShowMessage] = (false);




  return (
    <div>
      <Paper elevation={12}>
        <h1>{minutes}:{seconds}</h1>
      </Paper>
    </div>
  );
}

export default Timer;
