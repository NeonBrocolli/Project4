import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

/*---lifecycle methods---*/
// componentDidMount() {
//   let user = userService.getUser();
//   this.setState({user});
// }

  render() {
    return (
      <div>
        <NavBar />
        <div className="header">
          <h2>BLEPO!</h2>
        </div>
      </div>
    );
  }
}

export default App;
