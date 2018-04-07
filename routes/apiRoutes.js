module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const mainController = require('../controllers/Admin.js');

//get the most recent maintenance activity, do those that were completed or logged within the last 3 days
//find with a where searching for those within 3 days of of Date.now. Admin Landing


//get the most recently due To Dos. Admin Landing

//get the site inspection list for the week, show those that are completed in a different color. Admin Landing

//get the projects that are in the pipeline. Admin Landing

//get the proposals for those projects. Admin Landing


//get the daily todos. Admin Landing
router.get('/getDailies', mainController.getDailyToDo);

//get all site inspections. Site Inspection page
router.get('/allSiteInspections', mainController.getSiteInspections);

//filter the site inspections, get request. Site Inspection page

//post a new site observations
router.post('/allSiteInspections', mainController.postSiteObservations);

//get all maintenance activity
router.get('/allMaintenance', mainController.getMaintenance);

//filter (get) all maintenance activity

//patch a maintenance item
router.patch('/allMaintenance/:id', mainController.changeMaintenance);

//get all warehouse data
router.get('/allWarehouses', mainController.allWarehouses);

//filter (get) all warehouse data

//patch todos
router.patch('/allToDos/:id', mainController.updateToDos);

//post to todos
router.post('/allToDos', mainController.addToDo);

//get all followups
router.get('/allFollowups', mainController.getAllFollowups);

//filter all followups

//patch all followups
router.patch('/allFollowups/:id', mainController.updateFollowUps)

//get all projects
router.get('/getProjects', mainController.getProjects);

//filter all projects

//patch all projects
router.patch('/updateProject/:id', mainController.updateProjects);

//get all proposals
router.get('/getProposals', mainController.getProposals);

//filter all proposals

//patch all proposals
router.patch('/updateProposal/:id', mainController.updateProposals);

//post a project
router.post('/newProject', mainController.newProject);

//post a proposal
router.post('/newProposal', mainController.newProposal);

//post a followup
router.post('/newFollowup', mainController.newFollowup)

//post an application
router.post('/newApplication', mainController.newApplication);


	return router;
};