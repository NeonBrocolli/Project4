import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-materialize';
import './HomePage.css';
import ReactPlayer from 'react-player';
import tokenService from '../../utils/tokenService';
import VideoForm from '../../components/VideoForm/VideoForm';

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videoFeeds: [],
            ratings: [],
            message: ''
        }
    }

    objInArray = (array, property) => {
        for (let i=0; i<array.length; i++) {
            if (Object.keys(array[i])[0] === property) {
                return i;
            }
        }
        return false;
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
    }

    upVote = (id, stat) => {
        const BASE_URL = `/api/videos/${id}/vote/${stat}`;
        fetch(BASE_URL, {
            method: "GET",
            headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
            })
        })
        .then(data => data.json())
        .then(video => {
            const videos = [...this.state.videoFeeds];
            const idx = videos.findIndex(v => v._id === video._id);
            videos[idx] = video;
            this.setState({videoFeeds: videos});
        })
    }

    componentDidMount = () => {
       this.fetchData();
    }

    render() {
        let view = null;
        if (this.props.user) {
            view = 
                <div>
                    <Link className="btn btn-default" to="/videos">Post A Video</Link>
                </div>
        } else {
            view = <h4 className="text">Log In or Sign up to Post</h4>
        }
        
        return(
            <div className="homepage">
                <div className="jumbotron">
                    <h1 className="homepage-title">GG</h1>
                </div>
                <div className="homepage-videos container">
                    <div className="row">
                        <div className="col-xs-6 col-md-12">
                            {!this.state.videoFeeds ? 'LOADING' : this.state.videoFeeds.map((item, index) => 
                            <div key={index} className="card">
                                <ReactPlayer width={520} height={415} className="center-block" controls={true} url={item.url} />
                                <div className="card-block">
                                    <div className="card-content">
                                    <h1 className="card-title"><u>{item.title}</u></h1>
                                    <p>{item.description}</p>
                                    </div>
                                    <div className="card-action">
                                    <div>
                                        &nbsp;Skilled:&nbsp;
                                        <Button onClick={() => this.upVote(item._id, 'skilledVotes')} className="cyan darken-1" icon="gavel"> {item.skilledVotes}+</Button>
                                    </div>
                                    <div>
                                        &nbsp;Funny:&nbsp;
                                        <Button onClick={() => this.upVote(item._id, 'funnyVotes')} className="red darken-1" icon="tag_faces"> {item.funnyVotes}+</Button>
                                    </div>
                                    <div>
                                        &nbsp;RageQuit:&nbsp;
                                        <Button onClick={() => this.upVote(item._id, 'rageVotes')} className="deep-purple lighten-1" icon="sentiment_very_dissatisfied"> {item.rageVotes}+</Button></div>
                                    <div>
                                        &nbsp;Like:&nbsp;
                                        <Button onClick={() => this.upVote(item._id, 'likeVotes')} className="red lighten-3" icon="favorite"> {item.likeVotes}+</Button>
                                    </div>    
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;