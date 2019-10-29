import React, { useGlobal } from 'reactn';
import { Body } from '../style/GeneralStyles';
import ApplicationSignup from '../components/ApplicationSignup';
import Application from '../components/Application';

const ApplicationPage = () => {
    const [loggedIn, setLoggedIn] = useGlobal('loggedIn');
    const { 0: status } = useGlobal('applicationStatus');

    return (
        <Body>
            {loggedIn && status === 'inProgress' ? (
                <Application />
            ) : loggedIn && status === 'completed' ? (
                ''
            ) : (
                <ApplicationSignup />
            )}
        </Body>
    );
};

export default ApplicationPage;
