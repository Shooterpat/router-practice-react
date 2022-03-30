import React from 'react';
import '../styles/navbar.css'
import { Link, useNavigate } from 'react-router-dom'; //importing link to gain access to the tag, to set the buttons to 'link' to the pages to be rendered

function Navbar() {

    const imageURL = 'https://i.pinimg.com/736x/92/c3/a4/92c3a47129168b041ecb95e1bfa6ead3--pathfinder-rpg-gaming.jpg'

    const navigate = useNavigate()


    return (
        <div>
        <nav className='navbarContainer'>
            <img src={imageURL} alt='Pathfinder Logo' />
            <ul>
                <li><Link to="/Home"><button className='navButton'>Home</button></Link></li>
                <li><button onClick={() => {
                    navigate("/Classes")
                }} className='navButton'>Class Compendium</button></li>
                <li><button onClick={() => {
                    navigate("/About")
                }} className='navButton'>About</button></li>
                <li><button onClick={() => {
                    navigate("/Protected")
                }} className='navButton'>Protected Tab</button></li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;