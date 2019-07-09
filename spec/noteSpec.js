function testingNoteText() {
  var note = new Note();
  assert.isTrue(note.text = "My favourite language is Javascript");
};

testingNoteText();

function testingNoteNotes() {
  var note = new Note();
  assert.isTrue(note.content() === note.text);
};

testingNoteNotes();
