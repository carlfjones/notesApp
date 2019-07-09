function testingNoteListView() {
  var noteList = new NoteList();
  var noteListView =  new NoteListView(noteList);
  assert.isTrue(noteListView.list === noteList);
}

testingNoteListView();
