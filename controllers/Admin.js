//controllers for the back-end routes
const mongoose = require('mongoose');
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

//get all tenant maintenance activity
getTenMaintenance: (req, res) => {
    console.log("controller activate!");
    db.MaintenanceReq.find({}, '-assigned -createdAt -priority').then(function(maintenance){
        console.log(maintenance);
        res.json(maintenance);
    }).catch(function(err){
		console.log(err);
	});
},

//get all maintenance data for the maintenance team
getMainMaintenance: (req, res) => {
    db.MaintenanceReqs.find({unit, site, mainCat, description, alarm, bestTimes, resubmit, contactName, contact})
    .then(function(maintenance){
        res.json(maintenance);
    });
},

//filter (get) all maintenance activity

//patch a maintenance item
changeMaintenance: (req, res) => {
    //update this patch request with the correct where clause.
    const chosenMaintenance = req.id;
    const mainUpdate = req.update;
    db.MaintenanceReq.update({where:{_id:chosenMaintenance}}, {$set:mainUpdate}).then(function(changedMain){
        res.send(`maintenance updated for id ${changedMain._id}`)
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
    const chosenToDo = req._id;
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
getAllFollowups: (req, res) => {
    db.Followup.find({}).then(function(followups){
        res.json(followups);
    });
},

//filter all followups

//patch all followups
updateFollowUps: (req, res) => {
    const chosenFollowup = req._id;
    const updateFollow = req.update;
    db.Followup.update({where:{_id:chosenFollowup}}, {$set:updateFollow})
    .then(function(updatedFollowUp){
        res.send(`Updated follow-up with id ${updatedFollowUp._id}`);
    });
},

//filter all projects

//patch all projects
updateProjects: (req, res) => {
    const chosenProject = req._id;
    const projectUpdate = req.update;
    db.Projects.update({where:{_id:chosenProject}}, {$set:projectUpdate})
    .then(function(proyectos){
        res.send(`Updated the project with id ${proyectos._id}.`);
    });
},

//filter all proposals

//patch all proposals
updateProposals: (req, res) => {
    const chosenProposal = req.params.id;
    const proposalUpdate = req.body;
    db.Proposal.update({_id:chosenProposal}, proposalUpdate)
    .then(function(changedProposal){
        res.send(`Proposal with id ${changedProposal._id} has been updated.`);
    });
},

//post a project
newProject: (req, res) => {
    const createdProject = req.body;
    db.Projects.create(createdProject).then(function(projectCreated){
        res.send(`The project has been added with new id ${projectCreated._id}.`);
    });
},

//post a proposal
newProposal: (req, res) => {
    const createdProposal = req.body;
    db.Projects.create(createdProposal).then(function(proposalCreated){
        res.send(`The proposal has been added with new id ${proposalCreated._id}.`);
    });
},

//post a followup
newFollowup: (req, res) => {
    const createdFollowup = req.body;
    db.Projects.create(createdFollowup).then(function(followupCreated){
        res.send(`The followup has been added with new id ${followupCreated._id}.`);
    });
},

//post an application
newApplication: (req, res) => {
    const createdApp = req.body;
    db.Projects.create(createdApp).then(function(appCreated){
        res.send(`The new application has been added with new id ${appCreated._id}.`);
    });
},

newMaintenance: (req, res) => {
    const newMain = req.body;
    db.MaintenanceReq.create(newMain).then(function(newMaintenance){
        res.send('The new maintenance record has been added.');
    })
}


};
