//demonstrate the useof ref
import image from './menu.png';
import { useEffect, useRef, useState } from 'react'
import React from 'react'

export default function Example3() {
    const [value,setValue] = useState(false);
    const refNav = useRef(null);
    const refContainer = useRef(null);
    useEffect(()=>{
    if(value){
        refContainer.current.style.height = '150px';
    }
    else{
        refContainer.current.style.height = '0px';
    }
    },[value])
    return (
        <div className='box'>
            <div className='main' ref={refNav}>
                <div className='hero'>Navbar</div>
                <div className='menu' onClick={(e)=>{
                    e.preventDefault();
                    if(value == false)
                        setValue(true)
                    else    
                        setValue(false)
                    }
                    }><img src={image}></img></div>
            </div>               
            <div className='links-container' ref={refContainer}>
                <div className='link'>Home</div>
                <div className='link'>Featues</div>
                <div className='link'>Updates</div>
                <div className='link'>Learn</div>
            </div>
        </div>
    )
}
