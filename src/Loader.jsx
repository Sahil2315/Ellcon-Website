import './App.css'
import marker from './assets/marker.png'
import logotext from './assets/logotext.png'
import { useEffect, useState } from 'react';

function Loader({visible, setVisible}){
    useEffect(() => {
        setTimeout(() => {
        setVisible(false);
        }, 2000);
    }, []);
    return visible ? (
        <div id="cover">
            <img id='marker' src={marker}/>
            <img id='logotext' src={logotext}/>
        </div>
    ) : <div/>
}

export default Loader
