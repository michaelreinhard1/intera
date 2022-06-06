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
import { AdminRoutes, AgencyRoutes, AuthRoutes, HomeRoutes, PropertyRoutes, UserRoutes } from '../../core/routing';
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
import AgenciesLayout from './Auth/Admin/Agencies/AgenciesLayout';
import PropertiesOverviewScreen from './Properties/Overview/PropertiesOverviewScreen';
import PropertiesOverviewScreenAdmin from './Auth/Admin/Properties/Overview/PropertiesOverviewScreenAdmin';
import PropertiesLayoutAdmin from './Auth/Admin/Properties/PropertiesLayoutAdmin';
import UserEdit from './Auth/Admin/Users/Edit/UserEdit';
import AgenciesOverviewScreen from './Auth/Admin/Agencies/Overview/AgenciesOverviewScreen';
import UserAdd from './Auth/Admin/Users/Add/UserAdd';
import PropertyAdd from './Auth/Admin/Properties/Add/PropertyAdd';
import PropertyEdit from './Auth/Admin/Properties/Edit/PropertyEdit';
import PropertyDetailScreen from './Auth/Admin/Properties/Detail/PropertyDetailScreen';
import UserDetailLayout from './Auth/Admin/Users/Detail/UserDetailLayout';
import UserDetailScreen from './Auth/Admin/Users/Detail/UserDetailScreen';
import AgencyAdd from './Auth/Admin/Agencies/Add/AgencyAdd';
import AgencyDetailLayout from './Auth/Admin/Agencies/Detail/AgencyDetailLayout';
import AgencyDetailScreen from './Auth/Admin/Agencies/Detail/AgencyDetailScreen';
import AgencyEdit from './Auth/Admin/Agencies/Edit/AgencyEdit';

function App() {

  return (
    <AuthProvider>
        <Router>
              <Routes>
                  <Route element={<AppLayout />}>


                    <Route path={AuthRoutes.Index} element={<OnboardingLayout />}>
                        <Route path={AuthRoutes.Login} element={<Login />} />
                        <Route path={AuthRoutes.Register} element={ <Register /> }/>
                    </Route>

                    <Route
                            path={HomeRoutes.Index}
                            element={<PropertiesLayout />}>

                            <Route index element={<Home />} />

                            <Route
                                path={HomeRoutes.Buy}
                                element={<PropertiesOverviewScreen type={HomeRoutes.Buy} />}
                            />
                            <Route
                                path={HomeRoutes.Rent}
                                element={<PropertiesOverviewScreen type={HomeRoutes.Rent}/>}
                            />

                            <Route
                                path={HomeRoutes.Property}
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
                                element={<Navigate to={UserRoutes.Index} />}
                            />

                            {/* Users */}
                            <Route
                                path={UserRoutes.Index}
                                element={<UsersLayout />}>

                                <Route index element={<UsersOverviewScreen />} />
                                <Route path={UserRoutes.New} element={<UserAdd />} />

                                <Route
                                    path={UserRoutes.Detail}
                                    element={<UserDetailLayout />}>

                                        <Route index element={<UserDetailScreen />} />
                                        <Route path={UserRoutes.Edit} element={<UserEdit />} />
                                </Route>

                            </Route>

                            {/* Properties */}
                            <Route
                                path={PropertyRoutes.Index}
                                element={<PropertiesLayoutAdmin />}>

                                <Route index element={<PropertiesOverviewScreenAdmin />} />
                                <Route path={PropertyRoutes.New} element={<PropertyAdd />} />

                                <Route
                                    path={PropertyRoutes.Detail}
                                    element={<PropertyDetailLayout />}>

                                        <Route index element={<PropertyDetailScreen />} />
                                        <Route path={PropertyRoutes.Edit} element={<PropertyEdit />} />

                                </Route>
                            </Route>

                            {/* Agencies */}
                            <Route
                            path={AgencyRoutes.Index}
                                element={<AgenciesLayout />}>

                                <Route index path={AgencyRoutes.Agencies} element={<AgenciesOverviewScreen />} />
                                <Route index path={AgencyRoutes.New} element={<AgencyAdd />} />

                                <Route
                                    path={AgencyRoutes.Detail}
                                    element={<AgencyDetailLayout />} >

                                        <Route index element={<AgencyDetailScreen />} />
                                        <Route path={AgencyRoutes.Edit} element={<AgencyEdit />} />

                                </Route>
                            </Route>


                    </Route>

                  <Route path="*" element={ <NotFound /> }/>
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;