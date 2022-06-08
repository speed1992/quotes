import React, { useState } from 'react';
import './mobile-menu.css';

export function SlideOutMenuContainer() {

    const [visible, toggleVisible] = useState(false)

    return (
        <div>
            <div id='slide_nav'>
                <p id="slide_nav_button" onClick={() => toggleVisible({ visible: !visible })}>☰</p>
            </div>
            <div>
                <ul id='slide_menu' style={{ display: (visible ? 'block' : 'none') }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Tutorial</a></li>
                    <li><a href="#">Advertise</a></li>
                </ul>
            </div>
        </div>
    );
}