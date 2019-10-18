import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import InfoPanel from '../components/LandingInfoPanel';
import LoginPage from './LoginPage';
import GalleryPage from './GalleryPage';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/gallery">
                    <GalleryPage />
                </Route>
                <Route path="/amenities">
                    <div>AMENITIES</div>
                </Route>
                <Route path="/floorplans">
                    <div>FLOOR PLANS</div>
                </Route>
                <Route path="/apply">
                    <div>APPLY NOW</div>
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <LandingHero />
                    <InfoPanel />
                </Route>
            </Switch>
            <Footer/>
        </Router>
        </>
    );
};

export default LandingPage;
