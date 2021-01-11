import React from 'react';

const Banner = () => {
    return (
        <header className="banner">
            <video autoplay="true" className="video-banner" src="videos/run.mp4" loop muted></video>
            <div className="banner-content">
                <h1>Runners</h1>
                <p>Runners in one place</p>
            </div>
        </header>
    );
}

export default Banner;