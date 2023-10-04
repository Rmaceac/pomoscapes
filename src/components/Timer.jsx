import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import useSound from 'use-sound';
import sprite from '../sounds/pomoscapes-sprite.mp3';

const Timer = () => {
  // CHANGE minutes/seconds NUMBERS FOR TESTING/DEPLOYMENT
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPomo, setIsPomo] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [round, setRound] = useState(1);
  const [intervalId, setIntervalId] = useState(null);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setShowMessage(false);
    // CHANGE BELOW NUMBERS FOR TESTING/DEPLOYMENT
    setMinutes(25);
    setSeconds(0);
  };

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
            setMinutes((prevMinutes) => prevMinutes - 1);
          } else {
            // logic for when timer runs out
            setIsActive(false);
            setIsPomo((prevIsPomo) => !prevIsPomo);
            if (isPomo) {
              play({id: 'bird'});
              setShowMessage(true);
              if (round % 4 === 0) {
                setMinutes(15);
                setSeconds(0);
              } else {
                // CHANGE BELOW NUMBERS FOR TESTING/DEPLOYMENT
                setMinutes(5);
                setSeconds(0);
              }
            }
            if (!isPomo) {
              play({id: 'ding'})
              handleReset();
              setRound((prevRound) => prevRound + 1);
            }
          }
        }
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000)

      setIntervalId(interval);
    } else {
      clearInterval(intervalId); // clear the interval if isActive is false
    }
    
    return () => clearInterval(intervalId); // clear the interval on cleanup
  }, [seconds, isActive, isPomo, play, round]);

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
