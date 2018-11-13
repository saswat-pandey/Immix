import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/Nav/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Footer from './Components/Home/Footer';
import NotFound from './Components/Error/NotFound'
import Home from './Components/Home/Home'
import ProfileTabs from './Components/Shared/ProfileTabs'
import JobForm from './Components/JobForm/JobForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment><CssBaseline />
          <Switch>
            <Route exact path="/" render={() => (
              <Fragment>
                <NavBar auth={this.state.auth}/>
                {!(this.state.auth) ? <Home /> : null}
              </Fragment>
              )}/>

            <Route exact path="/login" render={() => (
              <Fragment>
                <NavBar auth={this.state.auth}/>
                <Login />
              </Fragment>
            )} />

            <Route exact path="/register" render={() => (
              <Fragment>
                <NavBar auth={this.state.auth}/>
                <Register />
              </Fragment>
            )} />

            <Route exact path="/profile" render={() => (
              <Fragment>
                <NavBar auth={this.state.auth}/>
                <ProfileTabs />
              </Fragment>
            )} />

            <Route path="/newjob" render={() => (
              <Fragment>
                <NavBar auth={this.state.auth}/>
                <JobForm />
              </Fragment>
            )} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
