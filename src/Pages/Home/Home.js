import React from 'react';
import Experts from './Experts/Experts';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;