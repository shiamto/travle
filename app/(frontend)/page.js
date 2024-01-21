import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Reviews from '../components/frontend/home/reviews';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Spotlight />
            <Destination />
            <Explore />
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;