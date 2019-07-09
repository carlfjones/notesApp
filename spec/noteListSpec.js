function testingNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes = []);
};

function testingPushingNoteToNoteList() {
  var noteList = new NoteList();
  var note = new Note("test note");

  noteList.addNote(note);

  assert.isTrue(noteList.notes[0] === note);
}

function testingShowNotes() {
  var noteList = new NoteList();
  var note = new Note("test note");
  noteList.addNote(note);
  assert.isTrue(noteList.showNotes()[0] === note);
}

function testingCreateAndStore() {
  var noteList = new NoteList();

  noteList.createAndStore("Favourite drink: seltzer");

  assert.isTrue(noteList.showNotes()[0].content() === "Favourite drink: seltzer");
}

testingNoteList();
testingPushingNoteToNoteList();
testingShowNotes();
testingCreateAndStore();
