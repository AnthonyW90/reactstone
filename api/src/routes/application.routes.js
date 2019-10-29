const { AsyncRouter } = require('express-async-router');
const { check } = require('express-validator');
const jwtMiddleware = require('../helpers/jwtMiddleware');
const requireRole = require('../helpers/permissions');
const handleValidationErrors = require('../helpers/handleValidationErrors');

const Application = require('../models/Application');
const User = require('../models/User')

const router = AsyncRouter();

createApplicationValidator = [
    check('applicant').exists(),
    check('apartment').exists(),
];

// LIST
router.get('/', [jwtMiddleware, requireRole('manager')], async (req, res) => {
    const applications = await Application.find();
    if (!applications) return res.sendStatus(404);

    res.send(applications);
});

// CREATE
router.post(
    '/',
    [
        ...createApplicationValidator,
        jwtMiddleware,
        requireRole('applicant'),
        handleValidationErrors,
    ],
    async (req, res) => {
        const {apartment, firstName, lastName, phoneNumber, email, income, occupants, previousStreetAddress, previousCity, previousState, previuosZip, bankruptcy, evicted} = req.body
        const application = new Application();
        application.set({
            applicant: req.user._id,
            status: "open",
            apartment, firstName, lastName, phoneNumber, email, income, occupants, previousStreetAddress, previousCity, previousState, previuosZip, bankruptcy, evicted  
        })
        await application.save();
        res.status(201).send(application);
    }
);

// RETRIEVE
router.get(
    '/:_id',
    [jwtMiddleware, requireRole('manager')],
    async (req, res) => {
        const application = await Application.findById(req.params._id);

        if (!application) return res.sendStatus(404);

        res.send(application);
    }
);

// UPDATE
router.patch(
    '/:_id',
    [jwtMiddleware, requireRole('manager')],
    async (req, res) => {
        const application = await Application.findById(req.params._id);

        if (!application) return res.sendStatus(404);

        application.set(req.body);

        await application.save();

        res.send(application);
    }
);

// DELETE
router.delete(
    '/:_id',
    [jwtMiddleware, requireRole('admin')],
    async (req, res) => {
        const application = await Application.findById(req.params._id);

        if (!application) return res.sendStatus(404);

        await application.remove();

        res.send(application);
    }
);

module.exports = router;
