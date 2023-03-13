import React, { useState } from 'react'
import styled from 'styled-components'

function useForm(propsForm){
  const [formValues,SetFormValues] = useState({})
  return{
    formValues,
    addValues: (e) =>{
      const value = e.target.value
      const name = e.target.name
      SetFormValues({
        ...formValues,
        [name]: value
      })
    }
  }
}

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
  .edit{background-color: #2460FC;}
  .edit:hover{background-color: #5282FF;}
  .reset{background-color: #DCD530;}
  .reset:hover{background-color: #F6F165;}
  .start{background-color: #51DC2F;}
  .start:hover{background-color: #87EF6D;}
  `


export default function Timer() {

  const FormCadastro = useForm({})

  const [btn,setBtn] = useState(false)
  const [add,setAdd] = useState(false)
  const [timer,setTimer] = useState("00:00:00")


  const closeContainer = (e) =>{
    setAdd(!add)
    setBtn(!btn)
    e.preventDefault()
    setTimer(`${FormCadastro.formValues.hour}:${FormCadastro.formValues.min}:${FormCadastro.formValues.seg}`)
    if(FormCadastro.formValues.hour == undefined || FormCadastro.formValues.min == undefined || FormCadastro.formValues.seg == undefined){
      setTimer("00:00:00")
      setBtn(false)
      alert("coloque valores válidos")
    }
  }

  return (
    <TimerStyled>
      <div className='containertime'>
        <div className='time'>{timer}</div>
      </div>
      <div className='btn'>
        {
          btn?
            <div className='btns'>
              <button className='edit'>Edit</button>
              <button className='reset' onClick={()=>setBtn(!btn)}>Reset</button>
              <button className='start' onClick={()=>console.log(timer)}>Start</button>
            </div>:
            <button onClick={()=>setAdd(!add)} className='add'>Add New Time</button>
        }
      </div>
      {
        add?<form>
            <input type='number' value={FormCadastro.formValues.hour} name='hour' className='hour' placeholder='Hours' onChange={FormCadastro.addValues}/>
            <input type='number' value={FormCadastro.formValues.min} name='min' className='min' placeholder='Minutes' onChange={FormCadastro.addValues}/>
            <input type='number' value={FormCadastro.formValues.seg} name='seg' className='seg' placeholder='Seconds' onChange={FormCadastro.addValues}/>
            <button className='send' onClick={(e)=>closeContainer(e)}>Add new timer</button>
        </form>:null
      }
    </TimerStyled>
  )
}
