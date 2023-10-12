const inquirer = require('inquirer');
const fs = require('fs');
inquirer .prompt([
 {
    type:'input',
    name:'Titel',
    message:'What is your project name?'
    },
    {
    type: 'checkbox',
    message: 'What license would you like?',
    name: 'license',
    choices:['Artistic license 2.0', 'MIT','BSD 3-clause "New" or "Revised" license','Boost Software License 1.0'],
    },
{}, 
{
    type: 'input',
    message: 'What is your Github User name?',
    name:'Githubusername',
},
{
    type: 'input',
    message:'What is your email address?',
    name: 'Email '
},
]);
const genReadme = ({Titel, license, Githubusername, Email}) => 
`
### Readme -- ${Titel}                       ${license}
## Desription 
Intro, here's a brife into to the project, talking about all 
the details about this project 
## Installation
Here we can describe the different node packages that a project might 
need in order to run. Like Inqirer or Jest for testing code. 
## Usage 
Here's were we can put all the info about the use cases for this 
project can be outlined. 
## Contubtors and tests 
here's were you can list all the the different people 
that help with the project 
## Contact Info 
Email ${Email} 
Github User Name ${Githubusername}
`
genReadme();
.then ((answers) => {
    const contentReadme = genReadme(answers);
    fs.writeFile('README.md', contentReadme)
})
function writeToFile(fileName, data) {}
function init() {}
init();
