// DATA SCHEMA
// vehicleModel.js
// Import necessary modules
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleName: {type: String, required: true, trim: true},
    vehicleType: {type: String, required: true, enum: ['Car', 'Truck', 'Van', 'Bus', 'Motorbike']},
    licensePlate: {type: String, unique: true, required: true, trim: true},
    vehicleMileage: {type: Number, required: true, trim: true},
    vehicleStatus: {type: String, required: true, enum: ['Active', 'Maintenance', 'Inactive', 'In Transit'],},
    vehiclePicture: {type: String, required: true}, 
    vehicleRegesterationDate: {type: Date, default: Date.now},
    vehicleLastUpdatedAt: {type: Date, default: Date.now},
}, { timestamps: true })

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;