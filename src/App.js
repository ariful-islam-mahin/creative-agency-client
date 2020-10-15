import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Order from './components/Order/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review/Review';
import AddService from './components/AddService/AddService/AddService';
import AddAdmin from './components/AddAdmin/AddAdmin/AddAdmin';
import AdminOrderList from './components/AdminOrderList/AdminOrderList/AdminOrderList';
import UserOrderList from './components/UserOrderList/UserOrderList/UserOrderList';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceData, setServiceData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/userOrderList">
            <UserOrderList></UserOrderList>
          </PrivateRoute>
          <PrivateRoute path="/adminOrderList">
            <AdminOrderList></AdminOrderList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
