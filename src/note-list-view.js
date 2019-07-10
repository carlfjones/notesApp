(function(exports) {
  function NoteListView(list) {
    this.list = list;
  };

  NoteListView.prototype.display = function () {
    if (this.list.notes.length === 0) {
      var htmlString = `<ul></ul>`
    } else {
      var notes = this.list.showNotes().map(note => note.content()).join(`</div></li><li><div>`)
      var htmlString = `<ul><li><div>${notes}</div></li></ul>`
    }
    return htmlString;
  };

  exports.NoteListView = NoteListView
})(this);
