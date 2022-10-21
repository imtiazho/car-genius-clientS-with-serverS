import React from 'react';
import Experts from './Experts/Experts';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <TopBanner></TopBanner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;