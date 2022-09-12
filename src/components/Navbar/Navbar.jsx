import React from 'react';
import Classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={Classes.nav}>
    <div>
      <a className={`${Classes.item} ${Classes.active}`}  href='#s'>
        Profile
      </a>
    </div>
    <div>
      <a className={Classes.item} href='#s'>
        Messages
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='#s'>
        News
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='#s'>
        Music
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='#s'>
        Settings
      </a>
    </div>
  </nav>;
}

export default Navbar;