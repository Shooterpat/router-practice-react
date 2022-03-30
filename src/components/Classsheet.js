import React from 'react';
import Navbar from './Navbar';
import '../styles/classSheet.css'
import { useParams, useNavigate } from 'react-router-dom';
import {classes} from "../data"

function Classsheet() {

    const {classname} = useParams();
    const navigate = useNavigate();

    console.log(classes[classname].power)
    
    return (
        <div className='classContainer'>
            <div className='cardContainer'>
            <h1>This is the {classname} class!</h1>
                <div className='cardTitle'></div>
                <div className='cardContent'>
                <h2>What power does a {classname} have?</h2>
                <p>{classes[classname].power}</p>
                <h2>What special abilities does a {classname} have?</h2>
                <p>{classes[classname].specialAbilities}</p>
                </div>
            </div>
            <button onClick={() => {
                    navigate("/Classes")
                }}>Back</button>
        </div>
    );
}

export default Classsheet;