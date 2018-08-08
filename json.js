console.log("Starting Json.js");
const fs = require("fs");
var originalNote = {
    title : "Some Title",
    body : "Some body"
};

// Save to json string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json",originalNoteString);
// Etract json string into object
var noteString = fs.readFileSync("notes.json");
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);