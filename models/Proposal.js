//admin proposals
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Proposal = new Schema({
    highlights:{
        type:String
    },
    projectName:{
        type:Schema.Types.ObjectId,
        ref:"Project"
    },
    contractor:{
        type:String
    },
    budget:{
        type:String
    },
    expectedCompletion:{
        type:Date
    },
    selected:{
        type:Boolean
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Proposal', Proposal);