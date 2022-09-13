import React from 'react';
import Classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={Classes.nav}>
    <div>
      <a className={`${Classes.item} ${Classes.active}`}  href='/profile'>
        Profile
      </a>
    </div>
    <div>
      <a className={Classes.item} href='/dialogs'>
        dialogs
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='/news'>
        News
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='/music'>
        Music
      </a>
    </div>
    <div>
      <a className={Classes.item}  href='/settings'>
        Settings
      </a>
    </div>
  </nav>;
}

export default Navbar;