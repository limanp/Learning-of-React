import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={<Profile postData={props.postData} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogData={props.dialogData} messageData={props.messageData} />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/news/*' element={<News />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
