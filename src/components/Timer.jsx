import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import useSound from 'use-sound';
import sprite from '../sounds/pomoscapes-sprite.mp3';

import './Timer.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPomo, setIsPomo] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [round, setRound] = useState(1);
  
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setShowMessage(false);
    setMinutes(25);
    setSeconds(0);
  };

  const [play] = useSound(sprite, {
    sprite: {
      bird: [0, 5500],
      ding: [6000, 4000]
    }
  });

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes((prevMinutes) => prevMinutes - 1);
          } else {
            clearInterval(interval); // it should be cleared here

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
      }, 1000);
    } else {
      if (interval !== null) {
        clearInterval(interval);
      }
    }
    
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [seconds, isActive, isPomo, play, round]);

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className='container'> 
      <Paper elevation={12} className='timer'>
        { showMessage &&
          <div className='timer-msg'>
            Time for a break!
          </div>
        }
        <div className='time-display'>
          <span>{displayMinutes}</span>:<span>{displaySeconds}</span>
        </div>
        <div className='controls'>
          <button onClick={handleToggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className='round-display'>
          Round: {round}
        </div>
      </Paper>
    </div>
  );
}

export default Timer;
