//admin follow-ups
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowUp = new Schema({
    unit:{
        type:Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    site:{
        type:Schema.Types.ObjectId,
        ref:"Warehouse"
    },
    description:{
        type:String
    },
    followupName:{
        type:String
    },
    dueDate:{
        type:Date
    },
    contactTenant:{
        type:Boolean
    },
    solution:{
        type:String
    },
    completed:{
        type:Boolean
    }
},
{timestamps:true});

module.exports = mongoose.model('FollowUp', FollowUp);