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

//get all site inspections. Site Inspection page

//filter the site inspections, get request. Site Inspection page

//post a new site observations

//get all maintenance activity

//filter (get) all maintenance activity

//patch a maintenance item

//get all warehouse data

//filter (get) all warehouse data

//patch daily/frequent todos

//post to daily/frequent todos

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


	return router;
};