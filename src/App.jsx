import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
// import UserForm from './components/UserForm/UserForm';
import Header from './Layout/Header/Header';
import EditProfile from './views/Profile/EditProfile';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfileDetail from './views/Profile/ProfileDetail';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute path="/profile">
            <ProfileDetail />
          </PrivateRoute>
          <PrivateRoute path="/edit">
            <EditProfile />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp={true} />
            {/* <UserForm /> */}
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
