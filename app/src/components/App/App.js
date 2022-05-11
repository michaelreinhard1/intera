import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import Home from './Home/Home';
// import Swipe from './Swipe/Swipe';
import AuthProvider from './Auth/AuthProvider';
import Header from './Header/Header';
import OnboardingLayout from './Auth/OnboardingLayout';
// import Likes from './Likes/Likes';
import Profile from './Auth/Profile/Profile'; 

function App() {
  return (
    <AuthProvider> 
        <Router>
          <Header/>
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path='/account' element={<OnboardingLayout />}>
                      <Route path={'/account/login'} element={<Login />} />
                      <Route path="/account/register" element={ <Register /> }/>
                  </Route>

                  <Route path={'/profile'} element={<Profile />} />

                  <Route path="*" element={ <NotFound /> }/>
                  
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;