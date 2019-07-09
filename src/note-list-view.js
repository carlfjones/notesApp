(function(exports) {
  function NoteListView(list) {
    this.list = list;
  };

  NoteListView.prototype.display = function () {
    if (this.list.notes.length === 0) {
      var htmlString = `<ul></ul>`
    } else {
      var htmlString = `<ul><li><div>${this.list.showNotes()[0].text}</div></li></ul>`
    }
    return htmlString;
  };

  exports.NoteListView = NoteListView
})(this);
