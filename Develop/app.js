var inquirer = require("inquirer");
var fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern  = require("./lib/Intern");
const Manager = require("./lib/Manager");
var genCard= require("./templates/card.js")
var genHTML= require("./templates/index.js")
var employeeArr = []; 

function saveHtml() {
	let cards = []
	employeeArr.forEach((data) => {
		let cardObj = {
			icon: '', 
			name: '', 
			id: '',
			email:'',
			special:'', 
			specialVal:'',
		}
		cardObj.name = data.getName(); 
		cardObj.id = data.getId(); 
		cardObj.email = data.getEmail(); 

		switch(data.getRole()) {
			case "Engineer":
				cardObj.special = 'GitHub'; 
				cardObj.specialVal = data.getGithub(); 
				cardObj.icon = 'fas fa-glasses'
				break; 
			case "Manager":
				cardObj.special = 'Office Number'; 
				cardObj.specialVal = data.getOfficeNumber(); 
				cardObj.icon = 'fas fa-mug-hot'
				break; 
			case "Intern":
				cardObj.special = 'School'; 
				cardObj.specialVal = data.getSchool(); 
				cardObj.icon = 'fas fa-user-graduate'
				break; 
		}
		cards.push(genCard.generateHtml(cardObj));
	})

	fs.writeFile('index.html', genHTML.generateHtml(cards.toString()), function (err) {
		if (err) return console.log(err);
		console.log('Generated Html');
	});
}

function prompt() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Employee Name?"
		},
		{
			type: "input",
			name: "id",
			message: "Employee ID?"
		},
				{
			type: "input",
			name: "email",
			message: "Employee Email?"
		},
		{
			type: "list",
			message: "Employee Title",
			name: "title",
			choices: [
				"Engineer", 
				"Manager", 
				"Intern"
			]
		},
	]).then(answers => {

		switch(answers.title ) {
			case "Engineer":
				inquirer.prompt([
				{
					type: "input",
					name: "github",
					message: "Git Account?"
				},
				{
					type: "list",
					message: "Add New Employee",
					name: "continue",
					choices: [
						"Yes", 
						"No"
				]
				},	
				]).then(res => {
					employeeArr.push(new Engineer(answers.name, answers.id, answers.email,res.github))
					if(res.continue == "Yes"){
						prompt()
					}else{
						saveHtml();
						return
					}
				})
				break;

			case "Manager":
				inquirer.prompt([
				{
					type: "input",
					name: "number",
					message: "Office Number?"
				},
				{
					type: "list",
					message: "Add New Employee",
					name: "continue",
					choices: [
						"Yes", 
						"No"
				]
				},	
				]).then(res => {
					employeeArr.push(new Manager(answers.name, answers.id, answers.email,res.number))
					if(res.continue == "Yes"){
						prompt()
					}else{
						saveHtml();
						return
					}
				})
				break;
			case "Intern":
				inquirer.prompt([
				{
					type: "input",
					name: "school",
					message: "School?"
				},
				{
					type: "list",
					message: "Add New Employee",
					name: "continue",
					choices: [
						"Yes", 
						"No"
				]
				},	
				]).then(res => {
					employeeArr.push(new Intern(answers.name, answers.id, answers.email,res.school))
					if(res.continue == "Yes"){
						prompt()
					}else{
						saveHtml();
						return
					}
				})
				break; 

			default: 	
				break; 
		} 
	})
}
prompt();
