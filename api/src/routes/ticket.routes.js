const { AsyncRouter } = require('express-async-router');
const { check } = require('express-validator');
const jwtMiddleware = require('../helpers/jwtMiddleware');
const requireRole = require('../helpers/permissions');
const handleValidationErrors = require('../helpers/handleValidationErrors');

const Ticket = require('../models/Ticket');

const router = AsyncRouter();

// LIST
router.get(
    '/',
    [jwtMiddleware, requireRole('maintenance', 'manager')],
    async (req, res) => {
        const tickets = await Ticket.find();
        if (!tickets) return res.status(404).send('No tickets found');

        res.send(tickets);
    }
);

// LIST for resident
router.get(
    '/res',
    [jwtMiddleware, requireRole('resident')],
    async (req, res) => {
        const tickets = await Ticket.find();
        if (!tickets) return res.status(404).send('No tickets found');

        tickets.filter(ticket =>
            ticket.apartment.equals(req.user.apartment._id)
        );

        return tickets;
    }
);

// CREATE
router.post('/', [jwtMiddleware], async (req, res) => {
    const ticket = await Ticket.newTicket(req.body);

    res.send(ticket);
});

// RETRIEVE
router.get('/:_id', [jwtMiddleware]);

module.exports = router;
