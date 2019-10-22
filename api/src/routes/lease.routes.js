const { AsyncRouter } = require('express-async-router');
const { check } = require('express-validator');
const jwtMiddleware = require('../helpers/jwtMiddleware');
const requireRole = require('../helpers/permissions');
const handleValidationErrors = require('../helpers/handleValidationErrors');

const Lease = require('../models/Lease');

const router = AsyncRouter();

// LIST
router.get('/', [jwtMiddleware, requireRole('manager')], async (req, res) => {
    const leases = await Lease.find();

    res.send(leases);
});

// CREATE
router.post('/', [jwtMiddleware, requireRole('manager')], async (req, res) => {
    const lease = await Lease.newLease(req.body);

    res.send(lease);
});

// RETRIEVE
router.get(
    '/:_id',
    [jwtMiddleware, requireRole('manager')],
    async (req, res) => {
        const lease = await Lease.findById(req.params._id);
        if (!lease) return res.status(404).send('Lease not found');
        res.send(lease);
    }
);

// UPDATE
router.patch(
    '/:_id',
    [jwtMiddleware, requireRole('manager')],
    async (req, res) => {
        const lease = await Lease.findById(req.params._id);
        if (!lease) return res.status(404).send('Lease not found');
        lease.set(req.body)

        await lease.save()
        res.send(lease);
    }
);

// DELETE
router.delete('/:_id',
[jwtMiddleware, requireRole('manager')],
async (req, res) => {
    const lease = await Lease.findById(req.params._id);
    if (!lease) return res.status(404).send('Lease not found');
    lease.remove()

    res.send(lease);
})

module.exports = router;
