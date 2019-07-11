(function(exports) {
  function NoteController() {
    this.noteList = new NoteList();
    this.noteList.createAndStore("Favourite drink: Irn-Bru");
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.displayOnPage = function () {
    var note = this.noteListView.display();
    var app = document.getElementById("app");
    app.innerHTML = note;
  };

  exports.NoteController = NoteController
})(this);

var list = new NoteList();
var noteController = new NoteController(list);
noteController.displayOnPage();
