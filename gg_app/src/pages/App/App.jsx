import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      user: null, 
      videos: null 
    }
  }
/*  helpers  */


/* callbacks  */
  handleVidPost = () => {
    this.setState({videos: 'hello!'})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
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
          <div>
            <NavBar user={this.state.user} handleLogout={this.handleLogout} />
            <Switch>
              <Route exact path='/' render={() =>
                <HomePage 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  handleVidPost={this.handleVidPost}
                />
              } />
              <Route exact path='/signup' render={(props) => 
                <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
