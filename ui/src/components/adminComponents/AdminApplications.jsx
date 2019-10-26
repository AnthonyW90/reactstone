import React, { useGlobal } from 'reactn';
import BackButton from '../BackButton';
import {Container, Div, Title, Content} from '../../style/AdminLists'

const AdminApplication = () => {

    const [applications, setApplications] = useGlobal('applications')

    return (
        <Div>
            <BackButton />
            <Container>
                <Div isCard>
                    <Title>Pending</Title>
                    {applications.filter(app => app.status === 'open').map(app => (<Content>{app.lastName}, {app.firstName}</Content>))}
                </Div>
                <Div isCard>
                    <Title>Approved</Title>
                    {applications.filter(app => app.status === 'approved').map(app => (<Content>{app.lastName}, {app.firstName}</Content>))}
                </Div>
                <Div isCard>
                    <Title>Closed</Title>
                    {applications.filter(app => app.status === 'closed').map(app => (<Content>{app.lastName}, {app.firstName}</Content>))}
                </Div>
            </Container>
        </Div>
    )
}

export default AdminApplication