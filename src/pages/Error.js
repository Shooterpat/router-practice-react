import React from 'react';
import '../styles/error.css'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='flex'>
            <img src='https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektorillustration-f%C3%BCr-i.jpg' alt='404 text' /><Link to="/Home"><button>Return Home</button></Link>
        </div>
    );
}

export default Error;