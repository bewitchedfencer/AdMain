//table for all site observations, even those that end up being maintenance items
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteObservation = new Schema({
    unit:{
        type:Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    site:{
        type:Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    maintenanceIssue:{
        type:Boolean
    },
    mainCat:{
        type:String
    },
    contactTenant:{
        type:Boolean
    },
    description:{
        type:String
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('SiteObservation', SiteObservation);