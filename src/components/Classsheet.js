import React from 'react';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';

function Classsheet() {

    const {classname} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <h1>This is the {classname} class!</h1>
            <button onClick={() => {
                    navigate("/Classes")
                }}>Back</button>
        </div>
    );
}

export default Classsheet;