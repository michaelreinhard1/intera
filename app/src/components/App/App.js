import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import Home from './Home/Home';
import AuthProvider from './Auth/AuthProvider';
import OnboardingLayout from './Auth/OnboardingLayout';
import Profile from './Auth/Profile/Profile';
import { AdminRoutes, AuthRoutes, HomeRoutes, PropertyRoutes } from '../../core/routing';
import RoleContainer from '../App/Auth/RoleContainer';
import { UserRoles } from "../../core/modules/users/constants";
import Contact from './Contact/Contact';
import Saved from './Saved/Saved';
import PropertiesLayout from './Properties/PropertiesLayout';
import PropertyDetail from './Properties/Detail/PropertyDetail';
import PropertyDetailLayout from './Properties/Detail/PropertyDetailLayout';
import AdminLayout from './Auth/Admin/AdminLayout';
import AppLayout from './AppLayout';
import UsersOverviewScreen from './Auth/Admin/Users/Overview/UsersOverviewScreen';
import UsersLayout from './Auth/Admin/Users/UsersLayout';
import PropertiesOverviewScreen from './Properties/Overview/PropertiesOverviewScreen';
import PropertiesOverviewScreenAdmin from './Auth/Admin/Properties/Overview/PropertiesOverviewScreenAdmin';
import PropertiesLayoutAdmin from './Auth/Admin/Properties/PropertiesLayoutAdmin';
import UserEdit from './Auth/Admin/Users/Edit/UserEdit';

function App() {

  return (
    <AuthProvider>
        <Router>
              <Routes>
                  <Route element={<AppLayout />}>

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

                  </Route>

                    {/* Admin */}
                    <Route
                        element={
                            <RoleContainer roles={[UserRoles.Admin]}>
                                <AdminLayout />
                            </RoleContainer>
                        }>

                            <Route
                                path={AdminRoutes.Index}
                                element={<Navigate to={AdminRoutes.Users} />}
                            />

                            {/* Users */}
                            <Route element={<UsersLayout />}>
                                <Route index path={AdminRoutes.Users} element={<UsersOverviewScreen />} />
                                <Route path={AdminRoutes.UserDetail} element={<UserEdit />} />
                            </Route>

                        <Route element={<PropertiesLayoutAdmin />}>
                            <Route index path={AdminRoutes.Properties} element={<PropertiesOverviewScreenAdmin />} />
                        </Route>

                    </Route>

                  <Route path="*" element={ <NotFound /> }/>
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;