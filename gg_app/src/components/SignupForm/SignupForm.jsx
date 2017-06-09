import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignupForm.css';
import userService from '../../utils/userService';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.signup(this.state)
      .then(() => {
        self.props.handleSignup();
        self.props.history.push('/');
      })
      .catch(err => self.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="container">
        <header>SIGN UP</header>
        <form className="col s12" onSubmit={this.handleSubmit} >
            <div>
              <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
            <div className="col s6">
              <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
            <div className="col s6">
              <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
            </div>
            <div className="col s12">
              <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
            </div>
            <div className="col-sm-12 text-center">
              <button className="btn light-green darken-3" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/' className="btn deep-orange accent-2">Cancel</Link>
            </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;