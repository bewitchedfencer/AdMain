//admin projects
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Projects = new Schema({
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
    projectName:{
        type:String
    },
    releaseOfLien:{
        type:Boolean
    },
    contractor:{
        type:String
    },
    budget:{
        type:String
    },
    dueDate:{
        type:Date
    },
    completed:{
        type:Boolean
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Projects', Projects);