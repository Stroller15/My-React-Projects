import "./HomePage.css"
import { useState,useEffect } from "react"

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if(timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="home-container">
      <div className="home-timer">timer: {timer} </div>
      <div className="home-count">{count} </div>

       <button className="home-btn-start btn" 
       onClick={ () => {
        setTimer(10);
        setCount(0);
      }} disabled = {timer !== 0}>
        start</button>

       <button className="home-btn-click btn" 
       onClick={ () => {
        setCount(count + 1);
      }} disabled = {timer === 0}>
        click me</button>

       <button className="home-btn-reset btn" 
       onClick={ () => {
        setTimer(0);
        setCount(0);
      }}>
        reset</button>
    </div>
  )
}

export default HomePage
