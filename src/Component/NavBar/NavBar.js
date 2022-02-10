import React from 'react';
import './style.css';

const NavBar = ({handleDisplay}) => {
    return (
        <nav>
            <h1 className='title'>Dog Gallery</h1>
            <span className='search--btn' onClick={handleDisplay}>Custom Search</span>
        </nav>
    )
}

export default NavBar;