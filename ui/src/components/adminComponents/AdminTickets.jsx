import React, { useGlobal } from 'reactn';
import BackButton from '../BackButton';
import {Container, Div, Title, Content} from '../../style/AdminLists'

const AdminTickets = () => {
    const [tickets, setTickets] = useGlobal('tickets')

    return (
        <div>
            <BackButton />
            <Container>
                <Div isCard>
                    <Title>New Tickets</Title>
                    {tickets.filter(ticket => !ticket.deleted && !ticket.touched).map(ticket => (<><Content>#{ticket.ticketNumber}</Content> <Content>{ticket.description}</Content></>))}
                </Div>
                <Div isCard>
                    <Title>Pending Tickets</Title>
                    {tickets.filter(ticket => !ticket.deleted && ticket.touched).map(ticket => (<><Content>#{ticket.ticketNumber}</Content> <Content>{ticket.description}</Content></>))}
                </Div>
            </Container>
        </div>
    )
}

export default AdminTickets