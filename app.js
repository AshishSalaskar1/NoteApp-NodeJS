console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs")

const notes = require("./note.js");
const argv = yargs.argv;
// const command = process.argv[2];
const command = argv._[0];

if(command === "add"){
        var note = notes.addNote(argv.title,argv.body);
        if(note){
                console.log("Note Created");
                console.log(`Title: ${note.title}`);
                console.log(`Body: ${note.body}`);
        }
        else{
                console.log("Note title already taken. Couldn't create the note");
        }
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
    





