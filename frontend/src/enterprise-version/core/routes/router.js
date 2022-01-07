/* eslint-disable import/no-named-as-default */



import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import DriverRoutes from "./Driver/DriverRoutes"
import UserRoutes from "./User/UserRoutes"
import AdminRoutes from "./Admin/AdminRoutes"
const AppRoutes = () =>{
    return (
      <>
         <UserRoutes/>
         <DriverRoutes/>
         <AdminRoutes/>
    </>
    )
}

export default AppRoutes

