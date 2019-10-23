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
router.get('/:_id', [jwtMiddleware], async (req, res) => {
    const ticket = await Ticket.findById(req.params._id);

    if (!ticket) return res.status(404).send('Ticket not found');
    if (req.user.role === 'resident') {
        ticket.apartment.equals(req.user.apartment)
            ? res.send(ticket)
            : res.sendStatus(403);
    }

    res.send(ticket);
});

// UPDATE
router.patch('/:_id', [jwtMiddleware], async (req, res) => {
    const ticket = await Ticket.findById(req.params._id);

    if (!ticket) return res.status(404).send('Ticket not found');
    if (req.user.role === 'resident') {
        if (!ticket.touched && ticket.apartment.equals(req.user.apartment)) {
            ticket.set(req.body);
            await ticket.save();
            res.send(ticket);
        } else {
            res.sendStatus(403);
        }
    }
    ticket.set(req.body);
    await ticket.save();
    res.send(ticket);
});

router.delete('/:_id', [jwtMiddleware, requireRole("admin"), async (req, res) => {
  const ticket = await Ticket.findById(req.params._id)
  if(!ticket) return res.status(404).send("Ticket not found")
  await ticket.remove()
  res.send(ticket)
}])

module.exports = router;
