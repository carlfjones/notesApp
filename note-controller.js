(function(exports) {
  function NoteController(aNoteList = NoteList, aNoteListView = NoteListView) {
    this.noteList = new aNoteList
    this.noteList.createAndStore("I like ham")
    this.noteListView = new aNoteListView(this.NoteList)
  };

  NoteController.prototype.displayOnPage = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.display();
  };

  exports.NoteController = NoteController;
})(this);
