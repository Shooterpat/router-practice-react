import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function Classes() {

    let { classname } = useParams();

    return (
        <div>
            <Navbar />
            This is the {classname} class!
        </div>
    );
}

export default Classes;