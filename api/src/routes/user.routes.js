const { AsyncRouter } = require('express-async-router')
const jwt = require('jsonwebtoken')
const { check } = require('express-validator')
const jwtMiddleware = require('../helpers/jwtMiddleware')
const requireRole = require('../helpers/permissions')
const handleValidationErrors = require('../helpers/handleValidationErrors')

const Apartment = require('../models/Apartment')
const Lease = require('../models/Lease')
const Application = require('../models/Application')

const User = require('../models/User')

const router = AsyncRouter()

const createUserValidators = [
    check("username").exists(),
    check("password").exists(),
    check("passwordConfirm").exists()
]

const loginValidator = [
    check("username").exists(),
    check("password").exists()
]

// GET list of users
router.get('/', [jwtMiddleware, requireRole(["isManager"])], async (req, res) => {
 const users = await User.find().populate({
   path: "lease apartment application"
 })
 res.send(users.map((user) => user.sanitize()))
})

// CREATE a new user
router.post('/create',[...createUserValidators, handleValidationErrors], async (req, res) => {
  const userExists = await User.findOne({username: req.body.username})

  if(userExists)
    return res.status(400).send("Username already exists.")
  if(req.body.password !== req.body.passwordConfirm)
    return res.status(400).send("Passwords do not match.")

  const user = await User.signUp(req.body.username, req.body.password, req.body.role)

  res.status(201).send(user.sanitize())
})

// PATCH update a user
router.patch('/:_id', [jwtMiddleware, requireRole('isAdmin')], async (req, res) => {
  const user = await User.findById(req.params._id)

  if (!user)
    return res.status(401).send("User not found")
  
  user.set(req.body)
  await user.save()

  res.status(201).send(user)
})

// LOGIN a user
router.post('/login', [...loginValidator, handleValidationErrors], async (req, res) => {
  const user = await User.findOne({username: req.body.username})

  
  if(!user || !user.comparePassword(req.body.password))
    return res.status(400).send("Invalid login information")

  const token = jwt.sign({_id: user._id}, "CHANGEME!")

  res.send({
    ...user._doc,
    password: undefined,
    token
  })
})


module.exports = router