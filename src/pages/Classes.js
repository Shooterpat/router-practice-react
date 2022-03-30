import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/classes.css'

function Classes() {

    const navigate = useNavigate()

    return (
        <div className='classContainer'>
            <div className='classInfoNavigation'>
            <h1>Take a look at our classes</h1>
            <div className='buttons'>
            <button onClick={() => {
                    navigate("/Classes/Fighter")
                }} className='classSelectButton'>Fighter</button>
            <button onClick={() => {
                    navigate("/Classes/Wizard")
                }} className='classSelectButton'>Wizard</button>
            </div>
            </div>
        </div>
    );
}

export default Classes;