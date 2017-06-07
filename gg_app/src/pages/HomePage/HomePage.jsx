import React, {Component} from 'react';
import './HomePage.css';
import ReactPlayer from 'react-player';
import VideoForm from '../../components/VideoForm/VideoForm';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoFeeds: [],
            message: ''
        }
    console.log('homepage user', this.state.user)
    }
    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    fetchData = () => {
        const BASE_URL = '/api/videos/';
        fetch(BASE_URL, {
            method: "GET"
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                videoFeeds: data
            })
        })
    };

/*--life cycle methods--*/
    componentDidMount = () => {
       this.fetchData();
    }

    componentDidUpdate = () => {
       this.fetchData();
    }

    render(){
        let view = null;
        if (this.props.user) {
            view = 
            <h1>{JSON.stringify(this.props.user)}</h1>
        } else {
            view = <h1>Nobody logged in</h1>
        }
        return(
            <div>
                {view}
                <h2>SECRET HIDDEN TREASURE!</h2>
                <div className="jumbotron">
                    <h1>JumboTRON!</h1>
                </div>
                <div className="container">
                    {!this.state.videoFeeds ? 'LOADING' : this.state.videoFeeds.map((item, index) => 
                    <div key={index} className="home">
                        <ReactPlayer width="420" height="315" url={item.url} />
                        <h1>{item.title}</h1>
                    </div>
                    )}
                </div>
                <div className="container container-fluid">
                    <VideoForm 
                    {...this.props}
                    updateMessage={this.updateMessage}
                    handleVidPost={this.props.handleVidPost}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;