const { AsyncRouter } = require('express-async-router');
const { check } = require('express-validator');
const jwtMiddleware = require('../helpers/jwtMiddleware');
const requireRole = require('../helpers/permissions');
const handleValidationErrors = require('../helpers/handleValidationErrors');

const Apartment = require('../models/Apartment');

const router = AsyncRouter();

const createApartmentValidator = [
    check('apartmentNumber').exists(),
    check('building').exists(),
];

// LIST
router.get('/', [jwtMiddleware], async (req, res) => {
    const apartments = await Apartment.find().populate({
        path: 'tickets',
    });

    if (!apartments) return res.status(404).send('No apartments found.');

    res.send(apartments);
});

// CREATE
router.post(
    '/',
    [
        ...createApartmentValidator,
        jwtMiddleware,
        requireRole('admin'),
        handleValidationErrors,
    ],
    async (req, res) => {
        apartmentExists = await Apartment.findOne({
            apartmentNumber: req.body.apartmentNumber,
        });
        if (apartmentExists)
            return res.status(400).send('Apartment number already in use.');

        const apartment = Apartment.create(
            req.body.apartmentNumber,
            req.body.building,
            req.body.tenant
        );

        res.status(201).send(apartment);
    }
);

// RETRIEVE
router.get('/:_id', [jwtMiddleware], async (req, res) => {
    const apartment = await Apartment.findById(req.params._id);

    if (!apartment) return res.status(404).send('Apartment not found');

    res.send(apartment);
});

// UPDATE
router.patch('/:_id', [], async (req, res) => {
    const apartment = await Apartment.findById(req.params._id);

    if (!apartment) return res.status(404).send('Apartment not found');

    apartment.set(req.body);

    res.status(201).send(apartment);
});

// DELETE
router.delete('/:_id', [], async (req, res) => {
    const apartment = await Apartment.findById(req.params._id);

    if (!apartment) return res.status(404).send('Apartment not found');

    apartment.remove();

    res.send(apartment);
});

module.exports = router;
