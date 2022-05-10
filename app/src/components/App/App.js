import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login';
import Home from './Home/Home';
// import Swipe from './Swipe/Swipe';
// import AuthContainer from './AuthContainer';
import Header from './Header/Header';
import Container from '../Design/Container/Container';
// import Likes from './Likes/Likes';

function App() {
  return (
    // <AuthContainer> 
      <Router>
          <Header/>
                <Routes>
                  <Route path="*" element={ <NotFound /> }/>
                  <Route path="/" element={ <Home /> }/>
                  <Route path="/login" element={ <Login /> }/>
                </Routes>
      </Router>
    // </AuthContainer>
  );
}

export default App;