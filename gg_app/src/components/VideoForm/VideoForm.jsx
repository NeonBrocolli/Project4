import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as videoService from '../../utils/videoService';

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: ''
    }
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
    videoService.createVideo(this.state)
      .then(video => {
        self.setState({title: '', url: '', description: ''});
        self.props.updateMessage('Uploaded Video');
        self.props.history.push('/');
      })
      .catch(err => self.props.updateMessage(err.message));
  }

    isFormInvalid() {
    return !(this.state.title && this.state.url);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Post a Video</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="title" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <input type="url" placeholder="link" value={this.state.url} onChange={(e) => this.handleChange('url', e)} />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <textarea type="text" placeholder="Description" value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
          </div>
          <div>
            <button className="btn btn-default" disabled={this.isFormInvalid()}>Post a vid!</button>&nbsp;&nbsp;
          </div>
        </form>
        <Link to='/'>Cancel</Link>
      </div>
    );
  }
};

export default VideoForm;