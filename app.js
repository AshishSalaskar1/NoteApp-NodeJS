const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs")

const notes = require("./note.js");

//Arguments Requirements Guides
let titleHelp = {
        describe : "Title of the note",
        demand: true,
        alias: "t" 
};

let bodyHelp =  {
        describe : "Body of the note",
        demand: true,
        alias: "b" 
};

const argv = yargs
             .command("add" , "Add a new Note" ,{ 
                     title: titleHelp,  
                     body: bodyHelp            
             })
             .command("read" , "Read a existing Note" , {
                     title: titleHelp
             })
             .command("list", "List all the created Notes")
             .command("remove", "Remove a Note",{
                     title: titleHelp,  
             })
             .help()
             .argv;


// const command = process.argv[2];
const command = argv._[0];

if(command === "add"){
        var note = notes.addNote(argv.title,argv.body);
        if(note){
                console.log("\nNote Created");
                notes.displayNote(note);
        }
        else{
                console.log("\nNote title already taken. Couldn't create the note");
        }
}
else if(command === "list"){
        let listNode = notes.listNotes();
        console.log(`Listing ${listNode.length} notes`);
        listNode.forEach((node) => {
                notes.displayNote(node);
        });
}
else if(command === "remove"){
        let removedNote = notes.removeNote(argv.title);
        let msgRemoved = removedNote ? "\nNote Removed" : "\nNote doesn't exist";
        console.log(msgRemoved);
}
else if(command === "read"){
        let getNode = notes.readNote(argv.title);
        if(getNode){
                notes.displayNote(getNode);
        }
        else{
                console.log("\nNote not found");
        }
}
else{
        console.log("Command not found");
}
    





