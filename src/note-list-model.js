function NoteList() {
  this.notes = [];
}

NoteList.prototype.addNote = function (note) {
  this.notes.push(note);
};

NoteList.prototype.showNotes = function () {
  return this.notes;
};

NoteList.prototype.createAndStore = function (text) {
  var note = new Note(text);
  this.addNote(note);
};
