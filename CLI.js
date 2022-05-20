const inquirer = require('inquirer');
var Weather = require('./WeatherAdmin.js')

var WeatherAdmin = new Weather()

var run = function () {
    inquirer.prompt([
        {
            name: "choice",
            message: "User or Admin?",
            type: "list",
            choices: ["User", "Admin"],
        }
    ]).then(function (response) {
        if (response.choice === "User") {
            WeatherAdmin.newUserSearch();
        } else if (response.choice === "Admin") {
            
                    WeatherAdmin.getData();
                }
                
            });
        }

run();