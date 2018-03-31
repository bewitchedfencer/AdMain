//all of the warehouses
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDo = new Schema({
    item:{
        type:String
    },
    dueDate:{
        type:Date
    },
    completed:{
        type:Boolean
    }
},{
    timestamps:true
});


module.exports = mongoose.model('ToDo', ToDo);