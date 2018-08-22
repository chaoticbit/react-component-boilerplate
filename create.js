const fs = require("fs");
const target = './src/components';

let files = [
    { contents: '', ext: 'js' },
    { contents: '', ext: 'css' }
];

let components = process.argv.filter((val, index, array) => {
    return index != 0 && index !=1;
});

components.forEach(cmp => {
   generateComponent(cmp); 
});

function generateComponent(cmp) {
    const path = `${target}/${cmp}`;    
    
    if(checkDir(path)) {        
        generateFiles(path, cmp);
    } else {        
        fs.mkdirSync(path);
        generateFiles(path, cmp);
    }
}

function checkDir(path) {    
    try {
        fs.statSync(path);
        return true;
    } catch (e) {
        return false;
    }
}

function generateFiles(path, cmp) {
    files.forEach(file => {
        let fileName = `${path}/${cmp}.${file.ext}`;
        if(file.ext === 'js') {
            let cmpName = cmp
                            .replace(/[a-z]/, function(g) { return g[0].toUpperCase()})
                            .replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()});
            file.contents = [
                "import React, { Component } from 'react'",
                "import PropTypes from 'prop-types';",
                "export default class " + cmpName + " extends Component {", 
                " ",
                "}"].join("\n");    
        }
        fs.writeFile(fileName, file.contents, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log(`${fileName} successfully created`);
        });                
    });     
    fs.writeFile(`${path}/package.json`, `{\n\t"name":"${cmp}",\n\t"main":"./${cmp}.js"\n}`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`${path}/package.json successfully created`);
    });
}
