import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Services from '../components/frontend/home/services';
import Reviews from '../components/frontend/home/reviews';
import WhyChoose from '../components/frontend/home/whyChoose';
import Discover from '../components/frontend/home/discover';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <WhyChoose />
            <Services />
            <Discover/>
            <Reviews />
            <Explore />
        </div>
    );
};

export default HomePage;