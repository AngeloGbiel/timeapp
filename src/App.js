import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ColorModeProvider from './components/ColorModeProvider'
import {CSSreset} from './components/CSSreset'
import MenuLeft from './components/menuLeft'
import MenuRight from './components/menuRight'


export default function HomePage() {
  const [color,setColor]=useState("#ffffff")
  const [size,setSize] = useState(100)
  const navigate = useNavigate()
  useEffect(()=>{ //carrega sempre que a página é chamada
    navigate('/') //sempre que a página for chamada, o navigate irá redirecionar o úsuario para rota '/'
  },[])
  return (
    <ColorModeProvider color={color} size={size}>
        <MenuLeft/>
        <MenuRight setColor = {setColor} setSize={setSize}/>
        <Outlet/>
        <CSSreset/>
    </ColorModeProvider>
  )
}
