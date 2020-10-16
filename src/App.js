import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Order from './components/Order/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review/Review';
import AddService from './components/AddService/AddService/AddService';
import AddAdmin from './components/AddAdmin/AddAdmin/AddAdmin';
import NoMatch from './components/NoMatch/NoMatch';
import OrderList from './components/OrderList/OrderList/OrderList';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
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
