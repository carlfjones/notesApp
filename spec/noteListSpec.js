function testingNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes = []);
};

function testingPushingNoteToNoteList() {
  var noteList = new NoteList();
  var note = new Note;

  noteList.addNote(note);

  assert.isTrue(noteList.notes[0] === note);
}

function testingShowNotes() {
  var noteList = new NoteList();
  var note = new Note;
  noteList.addNote(note);
  assert.isTrue(noteList.showNotes()[0] === note);
}

testingNoteList();
testingPushingNoteToNoteList();
testingShowNotes();
