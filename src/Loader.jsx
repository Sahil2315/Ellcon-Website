import './App.css'
import marker from './assets/marker.png'
import logotext from './assets/logotext.png'
import { useEffect, useState } from 'react';
import { VectorP, VectorC, VectorE, VectorL } from './Vectors'

function Loader({visible, setVisible}){
    useEffect(() => {
        setTimeout(() => {
        setVisible(false);
        }, 4000);
    }, []);
    return visible ? (
        <div id="cover">
            <VectorP/>
            <VectorC/>
            <VectorE/>
            <VectorL/>
            <img id='marker' src={marker}/>
            <img id='logotext' src={logotext}/>
        </div>
    ) : <div/>
}

export default Loader
