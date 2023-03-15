import React, { useState } from 'react'
import styled from 'styled-components'
import Switch from './Switch'
import { Data } from '../config'
import * as RiIcons from 'react-icons/ri'
import Menu from './Menu'

const Nav = styled.nav`
    height: 100%;
    width: 200px;
    position: absolute;
    left: ${({ active }) => active ? `0px` : `-130px`};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .4s;
    .container{
      background-color: ${({ theme }) => theme.backgroundMenu};
      height: 100%;
      width: 130px;
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
    transform: rotate(${({ active }) => active ? `180deg` : `0deg`}) scale(200%) ;
    color: ${({ theme }) => theme.backgroundArrowinner};
  }
  .colormode{
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px){
    height:200px;
    width:100%;
    left:0;
    top:0;
    transform:translateY(${({active})=>active?`0px`:`-120px`});
    display: flex;
    flex-direction:column;
    align-items: center;
    .container{
      width:100%;
      display:flex;
      max-height:120px;
    }
    .colormode{
      display:none;
    }
    .arrow{
      transition: .4s;
      transform: rotate(${({ active }) => active ? `-90deg` : `90deg`}) scale(200%) ;   
    }
  }
`

export default function MenuLeft() {
  const [active, setActive] = useState(false)
  const [focus, setFocus] = useState(0)
  return (
    <Nav active={active}>
      <div className='container'>
        {Data.menuLeft.map((value, i) => {
          return (
            <Menu
              index={i}
              focus={focus}
              setFocus={setFocus}
              key={i}
              value={value}
            />
          )
        })}
        <div className='colormode'>
          <Switch />
        </div>
      </div>
      <div className='openclosed' onClick={() => setActive(!active)}>
        <RiIcons.RiArrowDropRightFill className='arrow' />
      </div>
    </Nav>
  )
}
