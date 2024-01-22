import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Services from '../components/frontend/home/services';
import Reviews from '../components/frontend/home/reviews';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Spotlight />
            <Services />
            <Destination />
            <Reviews />
            <Explore />
        </div>
    );
};

export default HomePage;