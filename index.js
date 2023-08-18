//paclkages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// questions
const questions = [
    // inquirer
    //     .prompt([
    {
        type: 'input',
        message: 'Pick 3 characters',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Pick a text color',
        name: 'textColor',

    },
    {
        type: 'list',
        message: 'Pick a shape',
        name: 'shapes',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Pick a shape color',
        name: 'shapesColor',
    },
];