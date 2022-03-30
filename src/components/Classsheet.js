import React from 'react';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import {classes} from "../data"

function Classsheet() {

    const {classname} = useParams();
    const navigate = useNavigate();

    console.log(classes[classname].power)
    

    return (
        <div>
            <Navbar />
            <h1>This is the {classname} class!</h1>
            <div className='cardContainer'>
                <h2>What power does a {classname} have?</h2>
                <p>{classes[classname].power}</p>
                <h2>What special abilities does a {classname} have?</h2>
                <p>{classes[classname].specialAbilities}</p>
            </div>
            <button onClick={() => {
                    navigate("/Classes")
                }}>Back</button>
        </div>
    );
}

export default Classsheet;