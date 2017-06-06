import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = (props) => {
    return (
        <div>
            <NavBar user={props.user} />
            <h1>BLEPO!</h1>
        </div>
    )
}

export default HomePage;