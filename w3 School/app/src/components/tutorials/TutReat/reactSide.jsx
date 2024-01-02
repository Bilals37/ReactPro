import React from 'react';
import './side.css';
// import { NavLink } from "react-router-dom"
import { SidebarData } from './sideData1';
import { SidebarData2 } from './sideData2';
import { SidebarData3 } from './sideData3';

function Sidebar() {
    return (
        <>

            <div className='Sidebar'>
                <ul className='SidebarList'>
                    <li id="Close">
                        <div className='closebtn'>
                            <h3>React Tutorial</h3>
                        </div>
                    </li>
                    {SidebarData.map((val, key) => (
                        <li key={key} className='Row' onClick={() => { window.location.pathname = val.path }}>
                            <div id='tital'>{val.tital}</div>
                        </li>
                    ))}
                </ul>
                <ul className='SidebarList'>
                    <li id="Close">
                        <div className='closebtn'>
                            <h3>React Hooks</h3>
                        </div>
                    </li>
                    {SidebarData2.map((val, key) => (
                        <li key={key} className='Row'>
                            <div id='tital'>{val.tital}</div>
                        </li>
                    ))}
                </ul>
                <ul className='SidebarList'>
                    <li id="Close">
                        <div className='closebtn'>
                            <h3>React Exercises</h3>
                        </div>
                    </li>
                    {SidebarData3.map((val, key) => (
                        <li key={key} className='Row'>
                            <div id='tital'>{val.tital}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
