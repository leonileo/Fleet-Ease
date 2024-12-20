// vehicleController.js
const asyncHandler = require('../middleware/asyncHandler.js');
const Vehicle = require('../models/vehicleModel.js')

// @desc    Get the dashboard content
// @route   GET /api-v1/dashboard
// @access  Public
const dashboard = asyncHandler( async (req, res) => {
    // Dashboard function
    const vehicles = await Vehicle.find({})
    const allActiveVehicles = (await Vehicle.find({vehicleStatus: "Active"})).length
    const vehiclesInMaintenance = (await Vehicle.find({vehicleStatus: "Maintenance"})).length
    const allInActiveVehicles = (await Vehicle.find({vehicleStatus: "Inactive"})).length


    res.status(200).json({ vehicles, status:{
        allVehicles: vehicles.length, allActiveVehicles, vehiclesInMaintenance, allInActiveVehicles
    } 
})
});

// @desc    Register new vehicle
// @route   POST /api-v1/dashboard/add-vehicle
// @access  Public
const addVehicle = asyncHandler( async (req, res) => {
    // addVehicle function
    const {vehicleName, vehicleType, licensePlate, vehicleMileage, vehicleStatus, vehiclePicture} = req.body;


    try {
        const vehicleFound = await Vehicle.findOne({ licensePlate })
    
        if (vehicleFound) {
            res.status(400);
            throw new Error('Vehicle already registerd with the same license!')
        } else {
            const vehicle = await Vehicle.create({
                vehicleName, 
                vehicleType, 
                licensePlate, 
                vehicleMileage, 
                vehicleStatus, 
                vehiclePicture
            })
    
            // if successfully added
            if (vehicle) {
                res.status(201).json({
                    message: 'Vehicle created successfully'
                })
            } else {
                res.status(400);
                throw new Error('You provide invalid data! please check your input again.')
            }
        } 
    } catch (error) {
        throw new Error(error);
    }
});

// @desc    Update the vehicle information
// @route   PUT /api-v1/dashboard/vehicleID
// @access  Public
const updateVehicle = asyncHandler( async (req, res) => {
    // updateVehicle function
    const vehicleId = req.params.vehicleID
    const vehicle = await Vehicle.findOne({_id: vehicleId})
    const { vehicleName, vehicleType, licensePlate, vehicleMileage, vehicleStatus, vehiclePicture } = req.body;

    if (vehicle) {
        vehicle.vehicleName = vehicleName ? vehicleName : vehicle.vehicleName;
        vehicle.vehicleType = vehicleType ? vehicleType : vehicle.vehicleType;
        vehicle.licensePlate = licensePlate ? licensePlate : vehicle.licensePlate;
        vehicle.vehicleMileage = vehicleMileage ? vehicleMileage : vehicle.vehicleMileage;
        vehicle.vehicleStatus = vehicleStatus ? vehicleStatus : vehicle.vehicleStatus;
        vehicle.vehicleLastUpdatedAt = Date.now();
        vehicle.vehiclePicture = vehiclePicture ? vehiclePicture : vehicle.vehiclePicture;

        await vehicle.save();

        res.status(201).json({
            message: 'Vehicle Updated successfully.'
        })
    } else {
        res.status(404);
        throw new Error('Vehicle not found');
    }

 
});

// @desc    Delete vehicle
// @route   DELETE /api-v1/dashboard/vehicleID
// @access  Public
const removeVehicle = asyncHandler( async (req, res) => {
    // removeVehicle function
    const vehicleId = req.params.vehicleID;
    const vehicle = await Vehicle.findOne({_id: vehicleId});

    if (vehicle) {
        await Vehicle.findOneAndDelete({_id: vehicleId});
        res.json({ message: "Vehicle removed successfully!"});
    } else {
        throw new Error('Vehicle not found!');
    }
});


module.exports = {
    dashboard,
    addVehicle,
    updateVehicle,
    removeVehicle
}