//requests for maintenance work
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaintenanceReq = new Schema({
    unit:{
        type: Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    site:{
        type: Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    mainCat:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        default:"Normal"
    },
    description:{
        type:String
    },
    alarm:{
        type:Boolean
    },
    bestTimes:{
        type:String
    },
    resubmit:{
        type:Boolean
    },
    contactName:{
        type:String
    },
    assigned:{
        type:Boolean
    },
    contact:{
        type:String
        //this is either a phone number or an email.
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
});

module.exports = mongoose.model('MaintenanceReq', MaintenanceReq);