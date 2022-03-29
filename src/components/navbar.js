import React from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom'; //importing link to gain access to the tag, to set the buttons to 'link' to the pages to be rendered

function Navbar() {

    const imageURL = 'https://i.pinimg.com/736x/92/c3/a4/92c3a47129168b041ecb95e1bfa6ead3--pathfinder-rpg-gaming.jpg'


    return (
        <div>
        <nav className='navbarContainer'>
            <img src={imageURL} alt='Pathfinder Logo' />
            <ul>
                <li><Link to="/Home"><button className='navButton'>Home</button></Link></li>
                <li><Link to="/Classes"><button className='navButton'>Class Compendium</button></Link></li>
                <li><Link to="/About"><button className='navButton'>About</button></Link></li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;