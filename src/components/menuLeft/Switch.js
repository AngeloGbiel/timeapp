import styled from "styled-components";
import * as BsIcons from 'react-icons/bs'
import { useContext } from "react";
import { ColorModeContext } from "../ColorModeProvider";

const StyledSwitch = styled.div`
    background-color: #333333;
    width: 50px;
    height: 25px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-top: 3px;
    color: white;
    label{
        color: #FCC21B;
        height: 100%;
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    label::before{
        content: "";
        background-color: #fafafa;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        bottom: 0;
        left: 1px;
        transition: .3s;
        cursor: pointer;
    }
    input[type="checkbox"] { display: none; }
  input[type="checkbox"]:checked + label:before { transform: translateX(110%); }
`


export default function Switch() {
    const contexto = useContext(ColorModeContext)
    return (
        <StyledSwitch>
            <input
                type='checkbox'
                onChange={() => contexto.toggle()}
                id="darkmode"
            />
            <label
                htmlFor="darkmode"
                className="switch"
            >
                <span><BsIcons.BsFillMoonFill /></span>
                <span><BsIcons.BsFillSunFill /></span>
            </label>
        </StyledSwitch>
    )
}