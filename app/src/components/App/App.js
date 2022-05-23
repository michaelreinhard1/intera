import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
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
import { AdminRoutes, AuthRoutes, HomeRoutes, PropertyRoutes } from '../../core/routing';
import RoleContainer from '../App/Auth/RoleContainer';
import { UserRoles } from "../../core/modules/users/constants";
import UsersLayout from './Users/UsersLayout';
import UsersOverviewScreen from './Users/Overview/UsersOverviewScreen';
import Contact from './Contact/Contact';
import Saved from './Saved/Saved';
import Properties from './Properties/Overview/PropertiesOverviewScreen';
import PropertiesLayout from './Properties/PropertiesLayout';
import PropertiesOverviewScreen from './Properties/Overview/PropertiesOverviewScreen';
import PropertyDetail from './Properties/Detail/PropertyDetail';
import PropertyDetailLayout from './Properties/Detail/PropertyDetailLayout';
import HeaderSpacer from '../Design/HeaderSpacer/HeaderSpacer';

function App() {

  return (
    <AuthProvider>
        <Router>
          <Header/>
              <Routes>
                  <Route path={HomeRoutes.Index} element={<Home />} />

                  <Route path={AuthRoutes.Index} element={<OnboardingLayout />}>
                      <Route path={AuthRoutes.Login} element={<Login />} />
                      <Route path={AuthRoutes.Register} element={ <Register /> }/>
                  </Route>

                  <Route
                        path={PropertyRoutes.Index}
                        element={<PropertiesLayout />}>
                        {/* <Route index element={<PropertiesOverviewScreen />} /> */}
                        <Route
                            path={PropertyRoutes.Buy}
                            element={<PropertiesOverviewScreen type={PropertyRoutes.Buy} />}
                        />
                        <Route
                            path={PropertyRoutes.Rent}
                            element={<PropertiesOverviewScreen type={PropertyRoutes.Rent}/>}
                         />

                        <Route
                            path={PropertyRoutes.Detail}
                            element={<PropertyDetailLayout />}>
                            <Route index element={<PropertyDetail />}
                            />
                        </Route>

                    </Route>


                  <Route path={HomeRoutes.Saved} element={<Saved />} />

                  <Route path={HomeRoutes.Contact} element={<Contact />} />

                  <Route path={AuthRoutes.Profile} element={<Profile />} />


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