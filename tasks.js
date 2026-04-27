const fs = require('fs');

const PATH = './data/tasks.json';

function readTasks(){
    return JSON.parser(fs.readFilesSync(PATH, 'utf8'));
}

function writeTasks(tasks){
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };


