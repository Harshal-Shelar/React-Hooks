import React, { useEffect, useState } from 'react';
import './UseEffect.css'

const UseEffect = () => {

    const [screenSize, setScreenSize] = useState(window.screen.width);

    useEffect(() => {
        window.addEventListener('resize', currentScreenWidth);
        return ()=>{
            window.removeEventListener('resize', currentScreenWidth)
        }
    });

    const currentScreenWidth = ()=>{
        setScreenSize(()=>window.innerWidth);
    }

    return (
        <div>
            <div className="mainEffect">
                <h1 className='useEffectHeading'>useEffect Example</h1>
                <h1 className='text'>The size of your screen is <span className='screenSize'>{screenSize}</span></h1>
            </div>
        </div>
    )
}

export default UseEffect
