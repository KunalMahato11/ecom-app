const fs = require('fs')
const prompt =  require('prompt-sync')();

const files = fs.readdirSync(__dirname)

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);


let obj = [];

const ext = prompt('Enter Extension of the file with (.) : ');
const newname = prompt('Enter the new filename : '); 

for(const file of files) {
    if(file != 'script.js' && file.endsWith(ext)) 
    obj.push(file);
}
let i = 0;

for (const file of obj) {    
        i++;
        fs.rename(file, `${newname}-${i}.jpg`, () => console.log("Files Renamed"));
}
  