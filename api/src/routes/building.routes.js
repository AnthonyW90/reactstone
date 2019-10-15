const { AsyncRouter } = require('express-async-router')
const { check } = require('express-validator')
const jwtMiddleware = require('../helpers/jwtMiddleware')
const requireRole = require('../helpers/permissions')
const handleValidationErrors = require('../helpers/handleValidationErrors')

const Ticket = require("../models/Ticket")

const Building = require('../models/Building')

const router = AsyncRouter()

const createBuildingValidator = [
  check("buildingNumber").exists(),
  check("address").exists()
]

// GET list of buildings
router.get("/", async (req, res) => {
  const buildings = await Building.find().populate({
    path: "apartments tickets"
  })
  res.send(buildings)
})

// ADD a building
router.post("/", 
[...createBuildingValidator, jwtMiddleware, requireRole("isAdmin"), handleValidationErrors], 
async (req, res) => {
  const building = new Building(req.body)

  await building.save()

  res.send(building)
})

// DELETE a building
router.delete("/", async (req, res) => {
  const building = await Building.findOne( {buildingNumber: req.body.buildingNumber} )
  await building.remove()

  res.send(building)
})

module.exports = router