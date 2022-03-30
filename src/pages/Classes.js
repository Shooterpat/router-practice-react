import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Classes() {

    const navigate = useNavigate()

    return (
        <div className='classContainer'>
            <Navbar />
            <button onClick={() => {
                    navigate("/Classes/Fighter")
                }} className='classSelectButton'>Fighter</button>
            <button onClick={() => {
                    navigate("/Classes/Wizard")
                }} className='classSelectButton'>Wizard</button>
        </div>
    );
}

export default Classes;