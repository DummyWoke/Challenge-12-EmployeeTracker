const inquirer = require('inquirer');
const path = require('path');

function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }
  function Email(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  
  } 

require('./db/server').connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    employee_tracker();
});

const questions =
[
//Manager Section

{name:"TeamCreate", type:"list", message:'What would you like to do',choices:["Create","Cancel"],validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Choice Required."} else return true}},

{name: "ManagerUsername", type: "input",  message: "Enter Manager Username:",
when: (data) => {if (data.TeamCreate === "Create") {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Username Required."} else return true}},

{name: "ManagerID", type: "input",  message: "Enter Manager ID:",
when: (data) => {if (data.ManagerUsername ) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "ID Required."} else return true}},

{name: "ManagerGitHub", type: "input",  message: "Enter Manager GitHub Username:",
when: (data) => {if (data.ManagerID) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Github Required."} else return true}},

{name: "ManagerEmail", type: "input",  message: "Enter Email Password:",
when: (data) => {if (data.ManagerGitHub) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Email Required."} else return true}},

{name: "ManagerOfficeNum", type: "input",  message: "Enter Office Number:",
when: (data) => {if (data.ManagerEmail) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Office Number Required."} else return true}},

 //Employee Section  

{name: "EmployeeCreate", type: "list",  message: "Add an Employee to Team:",choices:["Intern","Engineer"],
when: (data) => {if (data.ManagerOfficeNum) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Selection Required."} else return true}},

//Intern    
{name: "InternName", type: "input",  message: "Add Intern Name:",
when: (data) => {if (data.EmployeeCreate === "Intern") {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Name Required."} else return true}},

{name: "InternID", type: "input",  message: "Add Intern ID:",
when: (data) => {if (data.InternName) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "ID Required."} else return true}},

{name: "InternEmail", type: "input",  message: "Add Intern Email:",
when: (data) => {if (data.InternName) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Email Required."} else return true}},

{name: "InternSchool", type: "input",  message: "Add Intern School:",
when: (data) => {if (data.InternID) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "School Required."} else return true}},

//Engineer    

{name: "EngineerName", type: "input",  message: "Add Engineer Name:",
when: (data) => {if (data.EmployeeCreate === "Engineer") {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Name Required."} else return true}},

{name: "EngineerID", type: "input",  message: "Add Engineer ID:",
when: (data) => {if (data.EngineerName) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "ID Required."} else return true}},

{name: "EngineerEmail", type: "input",  message: "Add Engineer Email:",
when: (data) => {if (data.EngineerID) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Email Required."} else return true}},

{name: "EngineerGitHub", type: "input",  message: "Add Engineer Github Username:",
when: (data) => {if (data.OfficeNum) {return true;}},validate: (data)=>{
    if (data==null || data==hasWhiteSpace() ){return "Github Username Required."} else return true}},

]

function init(){
    inquirer.prompt(questions)}
    // Function call to initialize app
    init();
