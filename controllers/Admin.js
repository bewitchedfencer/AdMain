//controllers for the back-end routes
const db = require("../models");

module.exports = {
//get the most recent maintenance activity, do those that were completed or logged within the last 3 days
//find with a where searching for those within 3 days of of Date.now. Admin Landing


//get the most recently due To Dos. Admin Landing


//get the site inspection list for the week, show those that are completed in a different color. Admin Landing


//get the projects that are in the pipeline. Admin Landing
getProjects: (req, res) => {
    db.Projects.find({}).then(function(projects){
        res.json(projects);
    });
},

//get the proposals for those projects. Admin Landing
//this is a find all. To find the ones for a specific project, use the getProjects method with the populate method.
getProposals: (req, res) => {
    db.Proposal.find({}).then(function(proposals){
        res.json(proposals);
    });
},

//get the daily todos. Admin Landing
getDailyToDo: (req, res) => {
    db.Daily.find({}).then(function(dailies){
        res.json(dailies);
    });
},

//get all site inspections. Site Inspection page
getSiteInspections: (req, res) => {
    db.SiteObservation.find({}).then(function(inspection){
        res.json(inspection);
    });
},

//filter the site inspections, get request. Site Inspection page

//post a new site observations
postSiteObservations: (req, res) => {
    const newObservation = req.body;
    db.SiteObservation.create(newObservation).then(function(newObs){
        res.send("A new site observation has been added.")
    });
},

//get all maintenance activity
getMaintenance: (req, res) => {
    db.MaintenanceReq.find({}).then(function(maintenance){
        res.json(maintenance);
    });
},

//filter (get) all maintenance activity

//patch a maintenance item
changeMaintenance: (req, res) => {
    //update this patch request with the correct where clause.
    db.MaintenanceReq.update({where:{_id:000}}).then(function(changedMain){
        res.send(`maintenance updated for id ${req.id}`)
    });
},

//get all warehouse data
allWarehouses: (req, res) => {
    db.Warehouse.find({}).then(function(warehouses){
        res.json(warehouses);
    });
},

//filter (get) all warehouse data


//patch todos
updateToDos: (req, res) => {
    const chosenToDo = req.id;
    const updateOne = req.update;
    db.ToDo.update({where:{_id:chosenToDo}}, {$set:{updateOne}})
    .then(function(updatedEntry){
        res.send(`Entry with id ${chosenToDo} has been updated.`);
    });
},

//post to todos
addToDo: (req, res) => {
    const newToDo = req.body;
    db.ToDo.create(newToDo).then(function(savedToDo){
        res.send(`A new ToDo has been created with id ${savedToDo._id}.`);
    });
},

//get all followups

//filter all followups

//patch all followups

//get all projects

//filter all projects

//patch all projects

//get all proposals

//filter all proposals

//patch all proposals

//post a project

//post a proposal

//post a followup

//post an application



};
