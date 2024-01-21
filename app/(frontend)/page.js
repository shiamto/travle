import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Services from '../components/frontend/home/services';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Spotlight />
            <Services />
            <Destination />
            <Explore />
        </div>
    );
};

export default HomePage;