# NoteApp-NodeJS 
A simple Command Line app made with NodeJS

## Running the app
- cd into the NoteApp-NodeJS folder 
- run `npm install` to install all the required dependencies automatically
- Run the code: `node app.js `

## Option
- **Add a new Note** :
  - `node app.js add --title="Note Title" --body="Note Body"` 
      or
  - `node app.js add -t="Note Title" -b="Note Body"`
- **Remove a Note** :
  - `node app.js remove --title="Note Title"` 
      or
  - `node app.js remove -t="Note Title"`
- **Read a Note** :
  - `node app.js read --title="Note Title"` 
      or
  - `node app.js read -t="Note Title"`
- **List all Notes** :
  - `node app.js list`
- **Display Help** :
  - `node app.js --help`
