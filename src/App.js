import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
      <Header />
      <Navbar navbar={props.state.navbar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={<Profile postsData={props.state.profilePage}
            addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path='/dialogs/*' element={<Dialogs 
            dialogs={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages}
            newMessageText={props.state.dialogsPage.newMessageText}
            addMessage={props.addMessage} 
            updateNewPostText={props.updateNewPostText}
            />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/news/*' element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
