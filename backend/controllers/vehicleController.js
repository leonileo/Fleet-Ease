// vehicleController.js
const asyncHandler = require('../middleware/asyncHandler.js');

const dashboard = asyncHandler( async (req, res) => {
    // Dashboard function
    res.json("Dashboard")
});

const addVehicle = asyncHandler( async (req, res) => {
    // addVehicle function
    res.json("addVehicle")
 
});

const updateVehicle = asyncHandler( async (req, res) => {
    // updateVehicle function
    res.json("updateVehicle")
 
});

const removeVehicle = asyncHandler( async (req, res) => {
    // removeVehicle function
    res.json("removeVehicle")
 
});



module.exports = {
    dashboard,
    addVehicle,
    updateVehicle,
    removeVehicle
}