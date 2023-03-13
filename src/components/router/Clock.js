import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ColorModeContext } from '../ColorModeProvider'

const ClockStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .clock{
    color:${({modeState})=>modeState.props.color};
    font-size: ${({modeState})=>`${modeState.props.size}px`};
  }
  @media (max-width: 900px){
    .clock{
      font-size:200%;
    }
  }
`

export default function Clock() {
  const contexto = useContext(ColorModeContext)
  const [hora, setHora] = useState(null)
  let horas = String()
  useEffect(() => { //TODO é chamado sempre que há uma atualização na página, onde nesse caso, a função Date
      horas = new Date().toLocaleTimeString()
      setTimeout(() => {
          setHora(horas)
      }, 1000)
      document.title = horas
  },[hora])
  return (
      <ClockStyled modeState={contexto}>
          <div className='clock'>{hora}</div>
      </ClockStyled>
  )
}
