import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './MenuAppBar';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import User from './User';
import NoMatch from './NoMatch';
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <BrowserRouter>
          <MenuAppBar />
        <Switch>
          <div>
            
          <Container maxWidth="sm" >

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
            <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            {/* <Route>
              <NoMatch />
            </Route> */}
          </Container>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
