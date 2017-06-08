import React, {Component} from 'react';
import VideoForm from '../../components/VideoForm/VideoForm';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div>
        <h2>SECRET HIDDEN TREASURE!</h2>
        <VideoForm 
          {...this.props}
          updateMessage={this.updateMessage}
        />
      </div>
    );
  }
};

export default VideoPage;