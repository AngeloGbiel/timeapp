import { createGlobalStyle } from "styled-components";

export const CSSreset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Arial Narrow', Arial, sans-serif;
        background-color: ${({theme})=>theme.backgroundBase};
        transition: all .3s;
        overflow-x: hidden; //não mostrar nada que vá além da tela na posição x
    }
`