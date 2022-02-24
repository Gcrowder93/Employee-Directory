import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import UserForm from './components/UserForm/UserForm';
import Header from './Layout/Header/Header';
import EditProfile from './views/Profile/EditProfile';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {/* <Auth /> */}
            <Auth isSigningUp />
          </Route>
          <Route path="/register">
            <UserForm />
          </Route>
          <Route path="/edit">
            <EditProfile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
