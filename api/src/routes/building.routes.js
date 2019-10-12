const { AsyncRouter } = require('express-async-router')
const { check } = require('express-validator')

const Building = require('../models/Building')

const router = AsyncRouter()

router.get("/", async (req, res) => {
  const buildings = await Building.find()
  res.send(buildings)
})

router.post("/", async (req, res) => {
  const building = new Building(req.body)

  await building.save()

  res.send(building)
})

router.delete("/", async (req, res) => {
  const building = await Building.findOne( {buildingNumber: req.body.buildingNumber} )
  await building.remove()

  res.send(building)
})

module.exports = router