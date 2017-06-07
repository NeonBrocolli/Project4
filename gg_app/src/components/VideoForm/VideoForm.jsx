import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import videoService from '../../utils/videoService';

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
          <input type="text" value={this.state.url} onChange={(e) => this.handleChange('title', e)} />
        </form>
      </div>
    );
  }
  console.log(VideoForm);
};

export default VideoForm;