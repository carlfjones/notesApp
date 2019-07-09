function testingNoteText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.text === "My favourite language is Javascript");
};

function testingNoteNotes() {
  var note = new Note("test note");
  assert.isTrue(note.content() === note.text);
};

testingNoteText();
testingNoteNotes();
