import React, {useState} from 'react';
import './App.css'
import Timer from './components/Timer'

export const Context = React.createContext();


function App() {
  const [timer, setTimer] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4
  });
  
  return (
    <Context.Provider value={[timer, setTimer]}>
      <div>
        <p>PomoScapes</p>
        <Timer />
      </div>
    </Context.Provider>
  )
}

export default App