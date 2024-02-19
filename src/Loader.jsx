import './App.css'
import marker from './assets/marker.png'
import logotext from './assets/logotext.png'
import { useEffect, useState } from 'react';
import { VectorP, VectorC, VectorE, VectorL } from './Vectors'

function Loader({visible, setVisible}){
    useEffect(() => {
        setTimeout(() => {
        setVisible(false);
        }, 3800);
    }, []);
    return visible ? (
        <div id="cover">
            <VectorP/>
            <VectorC/>
            <VectorE/>
            <VectorL/>
            <img className='marker' id='marker' src={marker}/>
            <img className='logotext' src={logotext}/>
        </div>
    ) : <div/>
}

export default Loader
