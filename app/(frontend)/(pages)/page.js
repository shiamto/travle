import React from 'react';
import Newsletter from '../components/home/newsletter';
import Safety from '../components/home/safety';
import Earning from '../components/home/earning';
import Downloads from '../components/home/download';
import DownloadApp from '../components/home/app';
import Platform from '../components/home/platform';
import Benefit from '../components/home/benefit';
import Process from '../components/home/process';
import WeAre from '../components/home/about';
import Banner from '../components/home/banner';
import Hero from '../components/home/hero';

const Frontend = () => {
    return (
        <div>
            <Hero />
            <WeAre />
            <Banner />
            <Process />
            <Platform />
            <Benefit />
            <DownloadApp />
            <Downloads />
            <Earning />
            <Safety />
            <Newsletter />
        </div>
    );
};

export default Frontend;