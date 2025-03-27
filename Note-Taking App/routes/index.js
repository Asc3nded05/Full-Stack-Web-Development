var express = require('express');
var router = express.Router();
var fs = require('fs');
var path=require('path');
const { title } = require('process');

function loadJSON() {
  const filePath = path.join(__dirname, '../public/notes.json');
  console.log(filePath);
  try {
    const data = fs.readFileSync(filePath, 'utf8'); 
    return JSON.parse(data);
  } 
  catch (err) {
    console.error('Error reading or parsing JSON:', err);
    return []; // Return a default value if there's an error
  }
}

function getNoteCount() {
  const notes = loadJSON(); // Load the existing notes
  return notes.length; // Return the number of notes
}

function writeJSON(data) {
  const filePath = path.join(__dirname, '../public/notes.json');
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } 
  catch (err) {
    console.error('Error writing JSON:', err);
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Notes', data: loadJSON()});
});

/* Render the create new note form.*/
router.get('/notes/new', function(req, res, next) {
  res.render('new', {title: 'New Note'});
});

/* Render the edit note form for a specific note. */
router.get('/notes/:id/edit', function(req, res, next) {
  res.render();
});

/* Toggle the starred attribute of the note. */
router.get('/notes/:id/star', function(req, res, next) {
  res.render();
});

/* Handle the creation of a new note. */
router.post('/notes', function(req, res, next) {
  const notes = loadJSON(); // Load existing notes
  const noteId = getNoteCount() + ""; // Dynamically set the note ID

  const noteTitle = req.body.title;
  const noteContent = req.body.content;
  const noteStarred = req.body.starred === 'true'; // Ensure boolean format
  const noteColor = req.body.color;
  const noteCreatedAt = new Date().toISOString(); // Consistent date format
  const noteUpdatedAt = new Date().toISOString();

  const newNote = {
    id: noteId,
    title: noteTitle,
    content: noteContent,
    starred: noteStarred,
    color: noteColor,
    createdAt: noteCreatedAt,
    updatedAt: noteUpdatedAt
  };

  notes.push(newNote); // Append the new note
  writeJSON(notes); // Save the updated array

  res.render('index', { title: 'Notes', data: notes }); // Render the page with updated notes
});

/* Handle the editing of an existing note. */
router.post('/update/:id', function(req, res, next) {
  res.render();
});

/* Handle the deletion of a note. */
router.get('/delete/:id', function(req, res, next) {
  notes = loadJSON();
  var id= req.params.id;

  notes = notes.filter(note => note.id !== id); 

  writeJSON(notes);

  res.render('index', {title: 'Notes', data: loadJSON()});
});


module.exports = router;