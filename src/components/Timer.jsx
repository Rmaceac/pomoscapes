import './Timer.css';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import useSound from 'use-sound';
import sprite from '../sounds/pomoscapes-sprite.mp3'

const Timer = () => {
  // CHANGE minutes/seconds NUMBERS FOR TESTING/DEPLOYMENT
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
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
    // CHANGE BELOW NUMBERS FOR TESTING/DEPLOYMENT
    setMinutes(0);
    setSeconds(4);
  }

  const [play] = useSound(sprite, {
    sprite: {
      bird: [0, 5500],
      ding: [6000, 4000]
    }
  });

  // const playBreakEnd = useSound();

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
              play({id: 'bird'});
              setShowMessage(true);
              if (round % 4 === 0) {
                setMinutes(15);
                setSeconds(0);
              } else {
                // CHANGE BELOW NUMBERS FOR TESTING/DEPLOYMENT
                setMinutes(0);
                setSeconds(7);
              }
            }
            if (!isPomo) {
              play({id: 'ding'})
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

  const paperStyle = {
    backgroundColor: '#2594F0',
    color: 'white'
  };

  return (
    <div className='timer'>
      <Paper elevation={12} sx={paperStyle}>
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
