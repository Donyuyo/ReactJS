import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HeroSection.css';

const HeroSection = () => {
    return (
    <div className="hero-section mb-4">
        <Carousel className='h-60'>
        <Carousel.Item>
            <img
            className="d-block w-100 img-fluid h-100"
            src="https://e0.pxfuel.com/wallpapers/7/331/desktop-wallpaper-the-punisher-logo-skull.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/02/logo-marvel-comics-2968634.jpg?tf=1200x"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/814/429/HD-wallpaper-deadpool-grunge-logo-creative.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default HeroSection;

