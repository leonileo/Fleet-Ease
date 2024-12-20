// API ROUTE and FUNCTION
// vehicleRoute.js
// Import necessary modules
const express = require('express');
const { dashboard, addVehicle, updateVehicle, removeVehicle } = require('../controllers/vehicleController')

const router = express.Router();

router.get('/', dashboard);
router.post('/add-vehicle', addVehicle);
router.route('/:vehicleID')
.put(updateVehicle)
.delete(removeVehicle);

module.exports = router;