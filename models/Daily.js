//all of the warehouses
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Daily = new Schema({
    item:{
        type:String
    },
    completed:{
        type:Boolean
    },
    frequency:{
        type:Number
    },
    siteInspection:{
        type:Boolean
    }
},{
    timestamps:true
});

//add data validation and the populate with maintenance data and projects for the sites

module.exports = mongoose.model('Daily', Daily);