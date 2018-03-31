//all of the warehouses
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Warehouse = new Schema({
    unitNumber: {
        type:Number,
        required:true
    },
    building: {
        type:Number
    },
    site:{
        type:String
    },
    parcel:{
        type:String
    },
    sqft:{
        type:Number
    },
    overheadDoor:{
        type:Number
    },
    offices:{
        type:Number
    },
    bathrooms:{
        type:Number
    }
}, {
    timestamps:true
});

//add data validation and the populate with maintenance data and projects for the sites

module.exports = mongoose.model('Warehouse', Warehouse);