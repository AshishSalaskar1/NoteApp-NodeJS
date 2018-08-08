console.log("Starting note.js");

let addNote = (title,body) => {
    console.log("Adding Node",title,body);
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