function testingNoteListView() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.list === noteList);
};

function testingNoteListViewDisplay() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  console.log(noteListView.display());
  assert.isTrue(noteListView.display() === `<ul></ul>`)
};

testingNoteListView();
testingNoteListViewDisplay();
