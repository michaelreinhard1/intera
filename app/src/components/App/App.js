import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '../Design/NotFound/NotFound';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import AuthProvider from './Auth/AuthProvider';
import OnboardingLayout from './Auth/OnboardingLayout';
import Profile from './Auth/Profile/Profile';
import { AdminRoutes, AgencyRoutes, AgentRoutes, AuthRoutes, HomeRoutes, PropertyRoutes, UserRoutes } from '../../core/routing';
import RoleContainer from '../App/Auth/RoleContainer';
import { UserRoles } from "../../core/modules/users/constants";
import AdminLayout from './Auth/Admin/AdminLayout';
import AppLayout from './AppLayout';
import UsersOverviewScreen from './Auth/Admin/Users/Overview/UsersOverviewScreen';
import UsersLayout from './Auth/Admin/Users/UsersLayout';
import AgenciesLayout from './Auth/Admin/Agencies/AgenciesLayout';
import PropertiesOverviewScreenAdmin from './Auth/Admin/Properties/Overview/PropertiesOverviewScreenAdmin';
import PropertiesLayoutAdmin from './Auth/Admin/Properties/PropertiesLayoutAdmin';
import UserEdit from './Auth/Admin/Users/Edit/UserEdit';
import AgenciesOverviewScreen from './Auth/Admin/Agencies/Overview/AgenciesOverviewScreen';
import UserAdd from './Auth/Admin/Users/Add/UserAdd';
import PropertyAdd from './Auth/Admin/Properties/Add/PropertyAdd';
import PropertyEdit from './Auth/Admin/Properties/Edit/PropertyEdit';
import AgencyAdd from './Auth/Admin/Agencies/Add/AgencyAdd';
import AgencyEdit from './Auth/Admin/Agencies/Edit/AgencyEdit';
import AgentLayout from './Auth/Agent/AgentLayout';
import AgentPropertiesLayout from './Auth/Agent/Properties/AgentPropertiesLayout';
import AgentPropertiesOverviewScreen from './Auth/Agent/Properties/Overview/AgentPropertiesOverviewScreen';
import AgentPropertyAdd from './Auth/Agent/Properties/Add/AgentPropertyAdd';
import UserEditLayout from './Auth/Admin/Users/Edit/UserEditLayout';
import PropertyEditLayout from './Auth/Admin/Properties/Edit/PropertyEditLayout';
import AgencyEditLayout from './Auth/Admin/Agencies/Edit/AgencyEditLayout';
import AgentPropertyEditLayout from './Auth/Agent/Properties/Edit/AgentPropertyEditLayout';
import Home from './Screens/Home/Home';
import PropertiesLayout from './Screens/Properties/PropertiesLayout';
import PropertyDetailLayout from './Screens/Properties/Detail/PropertyDetailLayout';
import PropertyDetail from './Screens/Properties/Detail/PropertyDetail';
import Saved from './Screens/Saved/Saved';
import PropertiesOverviewScreen from './Screens/Properties/Overview/PropertiesOverviewScreen';

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
                                    element={<UserEditLayout />}>

                                        <Route index element={<UserEdit />} />
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
                                    element={<PropertyEditLayout />}>

                                        <Route index element={<PropertyEdit />} />

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
                                    element={<AgencyEditLayout />} >

                                        <Route index element={<AgencyEdit />} />

                                </Route>
                            </Route>
                    </Route>

                    {/* Agent */}

                    <Route
                        element={
                            <RoleContainer roles={[UserRoles.Agent]}>
                                <AgentLayout />
                            </RoleContainer>
                        }>
                            {/* Properties */}
                            <Route
                                path={AgentRoutes.Properties}
                                element={<AgentPropertiesLayout />}>

                                <Route index element={<AgentPropertiesOverviewScreen />} />
                                <Route path={AgentRoutes.Edit} element={<AgentPropertyAdd />} />

                                <Route element={<AgentPropertyEditLayout />}>

                                </Route>

                                {/* <Route path={AgentRoutes.NewProperty} element={<AgentPropertyAdd />} /> */}

                            </Route>

                    </Route>

                  <Route path="*" element={ <NotFound /> }/>
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;