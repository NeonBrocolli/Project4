import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LoginForm.css';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.login(self.state)
      .then(() => {
        self.props.handleLogin();
        self.props.history.push('/');
      })
      .catch(err => alert('Invalid Credentials!'));
  }

  isFormInvalid() {
    return !(this.state.email && this.state.password === this.state.password);
  }

  render() {
    return (
      <div className="container">
        <header>Log In</header>
        <form onSubmit={this.handleSubmit} >
            <div className="col s12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
            <div className="col s12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
            <div className="col s12">
              <button className="btn light-green darken-3" disabled={this.isFormInvalid()}>Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="btn deep-orange accent-2">Cancel</Link>
            </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;