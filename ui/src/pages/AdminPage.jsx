import React from 'reactn'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../components/LogoutButton'
import Sidebar from '../components/adminComponents/AdminSidebar'
import AdminData from '../components/adminComponents/AdminData'
import AdminUsers from '../components/adminComponents/AdminUsers'
import AdminBuildings from '../components/adminComponents/AdminBuildings'
import AdminApartments from '../components/adminComponents/AdminApartments'
import AdminApplication from '../components/adminComponents/AdminApplications'
import AdminTickets from '../components/adminComponents/AdminTickets'

const AdminContainer = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    background-color: ${props => props.theme.colors.gray};
`


const AdminPage = () => {

    return(
        <>
            <AdminContainer>
                <Sidebar />
                <Route exact path="/">
                    <AdminData />
                </Route>
                <Route path="/users">
                    <AdminUsers />
                </Route>
                <Route path="/buildings">
                    <AdminBuildings />
                </Route>
                <Route path="/apartments">
                    <AdminApartments />
                </Route>
                <Route path="/applications">
                    <AdminApplication />
                </Route>
                <Route path="/tickets">
                    <AdminTickets />
                </Route>
            </AdminContainer>
            <LogoutButton/>
        </>
    )
}

export default AdminPage