import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as RxIcons from 'react-icons/rx'
import * as BsIcons from 'react-icons/bs'

export const Data = {
    test: "Meu test",
    menuLeft: [
        {
            title: "Clock",
            path: '/',
            icon: <AiIcons.AiOutlineClockCircle />
        },
        {
            title: "Timer",
            path: 'timer',
            icon: <RxIcons.RxTimer />
        },
        {
            title: "StopWatch",
            path: 'stopwatch',
            icon: <BsIcons.BsStopwatch />
        },
    ],
    menuRight: [
        { cor: "#DF2E38" },
        { cor: "#44A560" },
        { cor: "#E7B10A" },
        { cor: "#804674" },
        { cor: "#F22FD3" },
        { cor: "#4E31AA" },
        { cor: "#301E67" },
        { cor: "#820000" },
        { cor: "#FFFFFF" },
        { cor: "#000000" },
    ],
    aboutProject: [
        
    ]
}