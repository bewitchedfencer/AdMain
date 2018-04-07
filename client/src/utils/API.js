import axios from "axios";

//if these don't work, check out how I did the endpoints in the routes
export default {

getFrequents: function() {
    return axios.get('/getDailies');
},

getInspections: function() {
    return axios.get('allSiteInspections');
},

addInspection: function(inspection){
    return axios.post('/allSiteInspections', inspection);
},

getMain: function(){
    return axios.get('/allMaintenance');
},

updateMain: function(id, update){
    //I think I used _id for most of the controllers. This may be an issues
    return axios.patch(`/allMaintenance/${id}`, update);
},

getWarehouses: function(){
    return axios.get('allWarehouses');
},

updateToDo: function(id, update){
    return axios.patch(`/allToDos/${id}`, update);
},

};