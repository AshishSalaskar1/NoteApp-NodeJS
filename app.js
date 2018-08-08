console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs")

const note = require("./note.js");
const argv = yargs.argv;
// const command = process.argv[2];
const command = argv._[0];

if(command === "add"){
        note.addNote(argv.title,argv.body);
}
else if(command === "list"){
        note.listNotes();
}
else if(command === "remove"){
        note.removeNote(argv.title);
}
else if(command === "read"){
        note.readNote(argv.title);
}
else{
        console.log("Command not found");
}
    





