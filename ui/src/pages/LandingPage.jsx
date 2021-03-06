import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ComingSoonPage from '../pages/ComingSoon'
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import InfoPanel from '../components/LandingInfoPanel';
import LoginPage from './LoginPage';
import GalleryPage from './GalleryPage';
import ApplicationPage from './ApplicationPage';
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
                    <ComingSoonPage></ComingSoonPage>
                </Route>
                <Route path="/floorplans">
                    <ComingSoonPage></ComingSoonPage>
                </Route>
                <Route path="/apply">
                    <ApplicationPage />
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
