import React, {Component} from 'react';
import './HomePage.css';
import ReactPlayer from 'react-player';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            videoFeeds: null
        }
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

    componentDidMount = () => {
       this.fetchData();
    }

    render(){
        return(
            <div>
                <h2>SECRET HIDDEN TREASURE!</h2>
                {!this.state.videoFeeds ? 'LOADING' : this.state.videoFeeds.map((item, index) => 
                <div key={index} className="home">
                    <ReactPlayer width="420" height="315" url={item.url} />
                    <h1>{item.title}</h1>
                </div>
                )}
            </div>
        )
    }
}

export default HomePage;