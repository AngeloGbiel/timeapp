import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const MenuContainer = styled(Link)`
      text-decoration: none;
      .container{
        width: 100%;
      max-height: 150px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: .4s;
      cursor: pointer;
      border-bottom: 1px solid ${({ theme }) => theme.backgroundText};
    }
    .icon{
      color: ${({ theme }) => theme.backgroundText};
      font-size: 2rem;
      transition: .3s;
    }
    .title{
      color: ${({ theme }) => theme.backgroundText};
      font-size: 1.3rem;
      transition: .3s;
    }
    .active{
      background-color:${({theme})=>theme.backgroundHover};
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 900px){
      width: 100%;
      .container{
        border: none;
        width: 100%;
        height: 100px;
      }
        .active{
          height: 100%;
          width: 100%;
        }
    }
`

export default function Menu({ value, index, focus, setFocus }) {

  const focusId = () =>{
    setFocus(index)
    localStorage.setItem("id",index)
  }
  return (
    <MenuContainer
      onClick={() => focusId()}
      to={value.path}
    >
      <div className={index===focus?"active":"container"}>
        <div className='icon' >{value.icon}</div>
        <p className='title'>{value.title}</p>
      </div>
    </MenuContainer>
  )
}
