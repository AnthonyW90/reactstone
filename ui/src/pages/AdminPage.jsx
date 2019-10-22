import React from 'reactn'
import styled from 'styled-components'
import LogoutButton from '../components/LogoutButton'
import Sidebar from '../components/AdminSidebar'
import AdminData from '../components/AdminData'

const AdminContainer = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
`


const AdminPage = () => {

    return(
        <>
            <AdminContainer>
                <Sidebar />
                <AdminData />
            </AdminContainer>
            <LogoutButton/>
        </>
    )
}

export default AdminPage