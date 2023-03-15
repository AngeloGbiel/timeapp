import React, { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

export const ColorModeContext = createContext()

export default function ColorModeProvider({ children, ...props}) {
  const [mode, setMode] = useState('dark')
  
  const toggle = () => {
    setMode(mode=='dark'?"light":"dark")
  }

  const theme = {
    light: {
      backgroundBase: "#CBE4DE",
      backgroundHover: "#2DC3CA",
      backgroundMenu: '#0E8388',
      backgroundText: "#0F1313",
      backgroundArrow: "#2C3333",
      backgroundArrowinner: "#CBE4DE"
    },
    dark: {
      backgroundBase: "#2E4F4F",
      backgroundHover: "#495858",
      backgroundMenu: '#2C3333',
      backgroundText: "#CBE4DE",
      backgroundArrow: "#6BC2D4",
      backgroundArrowinner: "#000000"
    }
  }
  return (
    <ThemeProvider theme={theme[mode]}>
      <ColorModeContext.Provider value={{mode,toggle,props}}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  )
}
