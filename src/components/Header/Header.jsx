import React from 'react';
import Classes from './Header.module.css';

const Header = () => {
    return (
        <header className={Classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' 
            aria-hidden alt='image'/>
        </header>
    );
}

export default Header;