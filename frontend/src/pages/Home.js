import React from 'react';
import Frame from '../components/navigatebar'; // Navigation bar
import exampleImage from '../Images/ImagesHome/Homepage.png'; // Import the image
import './Home.css'; // Import the CSS file

function Home() {
    return (
        <div className="home-container">
            <Frame />
            <h1>Home Page</h1>
            <img src={exampleImage} alt="Home Banner" className="home-image" />
        </div>
    );
}

export default Home;
