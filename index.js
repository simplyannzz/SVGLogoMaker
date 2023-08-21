//packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// questions
const questions = [
    // inquirer
    //     .prompt([
    {
        type: 'input',
        message: 'Pick 3 characters',
        name: 'text',
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
        name: 'fill',
    },
];
// write files
const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Generated logo.svg");
            switch (`${data.shapes}`) {
                case 'Square':
                    console.log('Square is being created ...')
                    const square = new Square(data.fill, data.text, data.textColor)
                    fs.writeFile("./examples/logo.svg", square.renderSquare(), (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Square is created!")
                        }
                        // console.log(square)
                    });
                    break;
                case 'Circle':
                    console.log('Circle is being created ...')
                    const circle = new Circle(data.fill, data.text, data.textColor)
                    fs.writeFile("./examples/logo.svg", circle.rendercircle(), (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Circle is created!")
                        }
                    });
                    break;
                case 'Triangle':
                    console.log('Triangle is being created ...')
                    const triangle = new Triangle(data.fill, data.text, data.textColor)
                    fs.writeFile("./examples/logo.svg", triangle.renderTriangle(), (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Triangle is created!")
                        }
                    });
                    break;
            }
        });
}
init();