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

getTenMain: function(){
    return axios.get('/tenantMaintenance');
},

getMainMain: function(){
    return axios.get('/mainMaintenance');
},

getAdminMain: function(){
    return axios.get('/adminMaintenance');
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

newToDo: function(ToDo){
    return axios.post('/allToDos', ToDo);
},

getFollowups: function(){
    return axios.get('/allFollowups');
},

updateFollowups: function(id, update){
    return axios.patch(`/allFollowups/${id}`, update);
},

getProjects: function(){
    return axios.get('/getProjects');
},

updateProjects: function(id, update){
    return axios.patch(`/updateProject/${id}`, update);
},

getProposals: function(){
    return axios.get('/getProposals');
},

updateProposals: function(id, update){
    return axios.patch(`updateProposal/${id}`, update);
},

newProject: function(project){
    return axios.post('/newProject', project);
},

newProposal: function(proposal){
    return axios.post('/newProposal', proposal);
},

newFollowup: function(followup){
    return axios.post('/newFollowup', followup);
},

newApplication: function(application){
    return axios.post('/newApplication', application);
}

};