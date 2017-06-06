import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  /*---lifecycle methods---*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage />
            } />
            <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
