import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

    // componentDidUpdate = () => {
    //    this.fetchData();
    // }

    render() {
        let view = null;
        if (this.props.user) {
            view = 
                <div>
                    <Link className="btn btn-default" to="/videos">Post A Video</Link>
                    {/*{JSON.stringify(this.props.user)}*/}
                </div>
        } else {
            view = <h4 className="text">Log In or Sign up to Post</h4>
        }
        return(
            <div>
                <div className="jumbotron">
                    <div className="gg">G&nbsp;G</div>
                </div>
                <div>
                    {view}
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-2">
                        {!this.state.videoFeeds ? 'LOADING' : this.state.videoFeeds.map((item, index) => 
                        <div key={index} className="thumbnail">
                            <ReactPlayer width="420" height="315" controls="true" url={item.url} />
                            <div className="caption">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <footer className="homepage-footer navbar-fixed-bottom navbar-inverse">
                </footer>
            </div>
        )
    }
}

export default HomePage;