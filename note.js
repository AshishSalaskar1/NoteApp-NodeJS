console.log("Starting note.js");

const fs = require("fs");

let fetchNotes = () => {
    try{
        var noteString = JSON.parse(fs.readFileSync("notes-data.json"));
      
        return noteString;
        }
        catch (e){
  
                return [];
        }
};

let saveNote = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title,body) => {
    console.log("Adding Node",title,body);
    // let notes = [];
    notes = fetchNotes();
    let note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

let listNotes = () => {
    console.log("List all the notes");
}; 

let removeNote = (title) => {
    console.log("Remove Node",title);
}; 

let readNote = (title) => {
    console.log("Read Node",title);
}; 

module.exports = {
    // same as addNote : addNote
    addNote,
    removeNote,
    readNote,
    listNotes

};