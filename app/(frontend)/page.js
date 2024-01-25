"use client";
import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Services from '../components/frontend/home/services';
import Reviews from '../components/frontend/home/reviews';
import WhyChoose from '../components/frontend/home/whyChoose';
import Discover from '../components/frontend/home/discover';
import { useFetch } from '../helpers/hooks';
import { fetchLandingPage } from '../helpers/backend';


const HomePage = () => {
    const [landingData, getLandingData] = useFetch(fetchLandingPage)
  
    return (
        <div>
            <Hero hero={landingData?.content} />
            <WhyChoose why={landingData?.content} />
            <Services service={landingData?.content} />
            <Discover discovery={landingData?.content} />
            <Reviews />
            <Explore explore={landingData?.content} />
        </div>
    );
};

export default HomePage;