import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
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
            <div className="homepage">
                <div className="jumbotron">
                    <h1>G&nbsp;G</h1>
                </div>
                <div className="homepage-videos container">
                    <div className="row">
                        <div className="col-xs-6 col-md-12">
                            {!this.state.videoFeeds ? 'LOADING' : this.state.videoFeeds.map((item, index) => 
                            <div key={index} className="card">
                                <ReactPlayer width="420" height="315" className="center-block" controls="true" url={item.url} />
                                <div className="card-block">
                                    <h1 className="card-title">{item.title}</h1>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="side-nav">
                    <span>{view}</span>
                    <ul id="slide-out" class="side-nav">
                        <li><div class="userView">
                            <div class="background">
                                <img src="images/office.jpg" />
                            </div>
                             </div>
                        <img class="circle" src="images/yuna.jpg" />
                        <span class="white-text name">user name</span>
                        <span class="white-text email">user email</span>
                        </li>
                        <li><div class="divider"></div></li>
                        <li><Link to=""><i class="material-icons">cloud</i>1</Link></li>
                        <li><Link to=""><i class="material-icons">cloud</i>2</Link></li>
                        <li><Link to=""><i class="material-icons">cloud</i>3</Link></li>
                        <li><Link to=""><i class="material-icons">cloud</i>4</Link></li>
                    </ul>
                </div>
                <footer className="footer">
                    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                </footer>
            </div>
        )
    }
}

export default HomePage;