import React from 'react'
import styled from 'styled-components'

const ColorTextStyled = styled.div`
    display: flex;
    flex-direction: row;
    .container{
        width: 30px;
        height: 30px;
        background-color: ${({ value }) => value.cor};
    }
`

export default function ColorText({ value, index }) {
    return (
        <ColorTextStyled value={value}>
            <div className='container'></div>
        </ColorTextStyled>
    )
}
