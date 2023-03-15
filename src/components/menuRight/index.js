import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import * as RiIcons from 'react-icons/ri'
import { Data } from '../config'
import ColorText from './ColorText'
import ColorModeProvider, { ColorModeContext } from '../ColorModeProvider'
import { Navigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = styled.nav`
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .4s;
    transform: translate( ${({ active }) => active ? `0px` : `250px`});
    .container{
      transition: .4s;
      background-color: ${({ theme }) => theme.backgroundMenu};
      min-height: 100%;
      width: 250px;
      overflow: hidden;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:40px;
      padding-top:50px;
      color:white;
      font-size:1.3rem;
      z-index:1;
    }
    .openclosed{
      background-color: ${({ theme }) => theme.backgroundArrow};
      width: 40px;
      height: 40px;
      border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    cursor: pointer;
  }
  .arrow{
    transition: .4s;
    transform: rotate(${({ active }) => active ? `0deg` : `180deg`}) scale(200%) ;
    color: ${({ theme }) => theme.backgroundArrowinner};
  }
  .containerColorMode{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:center;
  }
  .btn{
    width:80%;
    height:40px;
    border-radius:10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border:none;
  }
  .size {
    -webkit-appearance: none;
    background: black;
    outline: none;
    width: 80%;
    height: 2px;
    border-radius: 9px;   
}
.size::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 

    background: white;
    border: 2px solid #1F1E61;
    cursor: pointer;
}
@media (max-width: 900px){
  display: none;
}
`

const ColorTextStyled = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({ value }) => value.cor};
`

export default function MenuRight({setSize,setColor}) {
    const [active, setActive] = useState(false)
    const contexto = useContext(ColorModeContext)

    return (
        <Nav active={active}>
            <div className='openclosed' onClick={() => setActive(!active)}>
                <RiIcons.RiArrowDropRightFill className='arrow' />
            </div>
            <div className='container'>
                <p>Color text</p>
                <div className='containerColorMode'>
                  {Data.menuRight.map((value,i)=>{
                    return(
                      <ColorTextStyled key={i} value = {value} onClick={()=>setColor(value.cor)}/>
                    )
                  })}
                </div>
                <p>Font size</p>
                <input className='size' min="80" max="125" type="range" onChange={(e)=>setSize(e.target.value)}/>
                <button className='btn'>About Project</button>
            </div>
        </Nav>
    )
}
