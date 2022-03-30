import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Classes() {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <button onClick={() => {
                    navigate("/Classes/fighter")
                }} className='classSelectButton'>Fighter</button>
            <button onClick={() => {
                    navigate("/Classes/wizard")
                }} className='classSelectButton'>Wizard</button>
        </div>
    );
}

export default Classes;