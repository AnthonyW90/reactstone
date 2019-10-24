import React from 'reactn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../components/LogoutButton'
import Sidebar from '../components/adminComponents/AdminSidebar'
import AdminData from '../components/adminComponents/AdminData'
import AdminUsers from '../components/adminComponents/AdminUsers'

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
                    <AdminUsers />
                </Route>
                <Route path="/apartments">
                    <AdminUsers />
                </Route>
                <Route path="/applications">
                    <AdminUsers />
                </Route>
                <Route path="/leases">
                    <AdminUsers />
                </Route>
                <Route path="/tickets">
                    <AdminUsers />
                </Route>
            </AdminContainer>
            <LogoutButton/>
        </>
    )
}

export default AdminPage