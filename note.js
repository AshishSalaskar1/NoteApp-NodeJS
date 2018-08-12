const fs = require("fs");

let displayNote = (note) => {
    console.log(`\nNote read Succesfully\nTitle: ${note.title}\nBody: ${note.body}`);
};

let fetchNotes = () => {
    try{
        let noteString = JSON.parse(fs.readFileSync("notes-data.json"));
      
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

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

let listNotes = () => {
    console.log("List all the notes");
    return fetchNotes();
}; 

let removeNote = (title) => {
    console.log("Removing Note",title);
    let allNotes = fetchNotes();
    let newNotesAFterDelete = allNotes.filter((note) => note.title !== title);
    saveNote(newNotesAFterDelete);
    // check and return true if note was removed
    return allNotes.length !== newNotesAFterDelete.length;
    
}; 

let readNote = (title) => {
    console.log("Reading Node",title);

    let allNotes = fetchNotes();
    let readNode = allNotes.filter((node) => node.title === title);
    if(readNode.length === 1){
        return readNode[0];
    }
}; 

module.exports = {
    // same as addNote : addNote
    addNote,
    removeNote,
    readNote,
    listNotes,
    displayNote

};