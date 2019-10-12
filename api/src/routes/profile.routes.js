const { AsyncRouter } = require('express-async-router')
const { check } = require('express-validator')

const Profile = require('../models/Profile')

const router = AsyncRouter()

router.get('/', async (req, res) => {
  const profiles = await Profile.find()

  res.send(profiles)
})

router.post('/', async (req, res) => {
  const profile = new Profile(req.body)
  await profile.save()

  res.send(profile)
})

module.exports = router