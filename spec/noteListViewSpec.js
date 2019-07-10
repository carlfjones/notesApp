function testingNoteListView() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.list === noteList);
};

function testingEmptyNoteListViewDisplay() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);

  assert.isTrue(noteListView.display() === `<ul></ul>`)
};

function testingNoteListViewDisplayWithSingleNote() {
  var noteList = new NoteList();
  noteList.createAndStore("test note")

  var noteListView =  new NoteListView(noteList);

  assert.isTrue(noteListView.display() === `<ul><li><div>test note</div></li></ul>`)
};

function testingNoteListViewDisplayWithMultipleNotes() {
  var noteList = new NoteList();
  noteList.createAndStore("test note");
  noteList.createAndStore("another note");

  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.display() === `<ul><li><div>test note</div></li><li><div>another note</div></li></ul>`);
}

testingNoteListView();
testingEmptyNoteListViewDisplay();
testingNoteListViewDisplayWithSingleNote();
testingNoteListViewDisplayWithMultipleNotes();
