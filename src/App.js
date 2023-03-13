import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ColorModeProvider from './components/ColorModeProvider'
import {CSSreset} from './components/CSSreset'
import MenuLeft from './components/menuLeft'
import MenuRight from './components/menuRight'


export default function HomePage() {
  const [color,setColor]=useState("#ffffff")
  const [size,setSize] = useState(100)
  return (
    <ColorModeProvider color={color} size={size}>
        <MenuLeft/>
        <MenuRight setColor = {setColor} setSize={setSize}/>
        <Outlet/>
        <CSSreset/>
    </ColorModeProvider>
  )
}
