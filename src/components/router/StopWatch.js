import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { ColorModeContext } from '../ColorModeProvider';

let h = "00";
let m = "00";
let s = "00";
let stopwatch;

const StopWatchStyled = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  .containerStopWatch{min-width: 500px;}
  .btn-click{
    width: 220px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.3rem;
    outline: none;
    border: none;
    transition: .3s;
  }
  .btn{
    display: flex;
    justify-content: space-around;
  }
  .numberHours{
    display: flex;
    justify-content: center;
    align-items: center;
    color:${({modeState})=>modeState.props.color};
    font-size: ${({modeState})=>`${modeState.props.size}px`};
  }
  .start{background-color: #51DC2F}
  .stop{background-color: #E14848}
  .reset{background-color: #DCD530}
  .start:hover{background-color: #90F078}
  .stop:hover{background-color: #F07A7A}
  .reset:hover{background-color: #FBF45C}

  @media (max-width: 900px){
    .btn{
      width:20rem;
    }
    .numberHours{
      font-size:300%;
    }
    .btn-click{
      width: 40%;
      height: 25px;
    }
    .containerStopWatch{
      min-width:200px;
    }
  }

  `
export default function StopWatch() {
  const [active, setActive] = useState(false)
  const [cron, setCron] = useState("00:00:00")
  const contexto = useContext(ColorModeContext)
  const toggle = () => {
    setActive(!active)
    active ? pause() : start()
  }
  const start = () => {
    pause()
    stopwatch = setInterval(() => {
      if (s < 60) {
        s++;
        if (s <= 9) { s = "0" + s }
      }
      if (s >= 60) {
        s = "00"; m++;
        if (m <= 9) { m = "0" + m }
      }
      if (m >= 60) {
        m = "00"; h++;
        if (h < 10) { h = "0" + h }
      }
      save()
    }, 1000)

  }
  const pause = () => {
    clearInterval(stopwatch)
  }
  const reset = () => {
    setActive(false)
    s='00'
    m='00'
    h='00'
    clearInterval(stopwatch)
    save()
  }
  const save = () => {
    setCron(`${h}:${m}:${s}`)
  }

  return (
    <StopWatchStyled modeState = {contexto}>
      <div className='containerStopWatch'>
        <div className='numberHours'>{cron}</div>
      </div>
      <div className='btn'>
        <button
          className={active ? 'stop btn-click' : 'start btn-click'}
          onClick={() => toggle()}
        > {active ? 'Stop' : 'Start'} </button>
        <button
          className='reset btn-click'
          onClick={() => reset()}
        >Reset</button>
      </div>
    </StopWatchStyled>
  )
}
