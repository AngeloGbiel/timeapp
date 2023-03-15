import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ColorModeContext } from '../ColorModeProvider'
import { motion } from 'framer-motion'

const TimerStyled = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
  .containertime{min-width: 500px;}
  .time{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color:${({modeState})=>modeState.props.color};
    font-size: ${({modeState})=>`${modeState.props.size}px`};
  }
  .btn{
    display: flex;
    justify-content: center;
  }
  .add{
    background-color: #071A37;
    border: none;
    color: white;
    width: 280px;
    height: 40px;
    border-radius: 10px;
    font-size: 1.3rem;
    transition: .3s;
    outline: none;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .add:hover{
    background-color: #142C51;
  }
  form{
    background-color: #0E8388;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    width: 400px;
    height: 400px;
    display: flex;
    gap: 30px;
    padding: 0px 30px 0px 30px;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.5);
  }
  form input{
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding-left: 10px;
  }
  form button{
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #071A37;
    color: white;
    font-size: 1.3rem;
    transition: .3s;
    cursor: pointer;
  }
  .send:hover{
    background-color: #142C51;
  }
  .btns{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btns button{
    width: 30%;
    height: 38px;
    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .container{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
  }
  .edit{background-color: #2460FC;}
  .edit:hover{background-color: #5282FF;}
  .reset{background-color: #DCD530;}
  .reset:hover{background-color: #F6F165;}
  .start{background-color: #51DC2F;}
  .start:hover{background-color: #87EF6D;}
  @media (max-width:900px){
    .btns{
      width:20rem;
    }
    .time{
      font-size:300%;
      color:black;
    }
  }
  `
let h = 0, m = 0, s = 0
let timeLoop


export default function Timer() {
  const contexto = useContext(ColorModeContext)
  useEffect(()=>{
    document.title = timer+" - Timer"
  })
  
  const [btn, setBtn] = useState(false)
  const [add, setAdd] = useState(false)
  const [timer, setTimer] = useState("00:00:00")
  
  const addTimer = (e) =>{
    e.preventDefault()
    setAdd(!add)
    setBtn(!btn)
    if(s<10){s = '0'+s}
    if(m<10){m = '0'+m}
    if(h<10){h = '0'+h}
    start()
  }
  const start = () =>{
    clear()
    setTimer(`${h}:${m}:${s}`)
    timeLoop = setInterval(()=>{
      if(s == 0 && m == 0 && h == 0){
        clear()
        console.log('clear')
      }else{
        s--
        if(s<10){s = '0'+s}
        setTimer(`${h}:${m}:${s}`)
        if(s == 0 && m > 0){
          console.log(s);
          s = 60
          m-- 
          if(m<10){m = '0'+m}
        }
        if(m==0 && s == 0 && h >0){
          s = 60
          m = 60
          h--
          if(h<10){h = '0'+h}
        }
      }
    },1000)
  }
  const clear = () =>{
    clearInterval(timeLoop)
  } 
  const reset = () =>{
    clear()
    h=0;m=0;s=0;
    setTimer(`0${h}:0${m}:0${s}`)
    setBtn(!btn)
  }

  return (
    <TimerStyled modeState={contexto}> 
      <div className='containertime'>
        <div className='time'>{timer}</div>
      </div>
      <div className='btn'>
        {
          btn ?
            <div className='btns'>
              <button className='edit' onClick={()=>clear()}>Pause</button>
              <button className='reset' onClick={()=>reset()}>Reset</button>
              <button className='start' onClick={()=>start()}>Start</button>
            </div> :
            <button onClick={() => setAdd(!add)} className='add'>Add New Time</button>
        }
      </div>
      {
        add ? <motion.div
        className="container"
        initial={{ scale: 0, rotate: 0}}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 108,
          damping: 20
        }}
        > <form>
          <input type='number' className='hour' placeholder='Hours'  onChange={(e)=> h = e.target.value} />
          <input type='number' className='min' placeholder='Minutes' onChange={(e)=> m = e.target.value} />
          <input type='number' className='seg' placeholder='Seconds' onChange={(e)=> s = e.target.value}  />
          <button className='send' onClick={(e)=>addTimer(e)}>Add new timer</button>
        </form> </motion.div> : 
        <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 108,
          damping: 20
        }}
        > <form>

        </form> </motion.div>
      }
    </TimerStyled>
  )
}
