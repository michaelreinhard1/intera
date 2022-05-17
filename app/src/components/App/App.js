import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
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
import { AdminRoutes, AuthRoutes, UserRoutes } from '../../core/routing';
import RoleContainer from '../App/Auth/RoleContainer';
import { UserRoles } from "../../core/modules/users/constants";
import UsersLayout from './Users/UsersLayout';
import UsersOverviewScreen from './Users/Overview/UsersOverviewScreen';

function App() {
  return (
    <AuthProvider> 
        <Router>
          <Header/>
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={AuthRoutes.Index} element={<OnboardingLayout />}>
                      <Route path={AuthRoutes.Login} element={<Login />} />
                      <Route path={AuthRoutes.Register} element={ <Register /> }/>
                  </Route>

                  <Route path={'/profile'} element={<Profile />} />

                    {/* Admin */}
                    <Route
                        element={
                            <RoleContainer roles={[UserRoles.Admin]}>
                                <Outlet />
                            </RoleContainer>
                        }>
                        {/* Users */}
                        <Route
                            path={AdminRoutes.Index}
                            element={<UsersLayout />}>
                            <Route path={AdminRoutes.Users} element={<UsersOverviewScreen />} />
                        </Route>
                    </Route>

                  <Route path="*" element={ <NotFound /> }/>
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;