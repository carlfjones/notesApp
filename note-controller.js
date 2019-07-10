(function(exports) {
  function NoteController() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    noteList.createAndStore("Favourite drink: Irn-Bru");
  };

  NoteController.prototype.displayOnPage = function () {
    var note = noteListView.display();
    var app = document.getElementById("app");
    app.innerHTML = note;
  };

  exports.NoteController = NoteController
})(this);

var list = new NoteList();
var listView = new NoteController(list);
console.log("hello3");
console.log(list);
console.log("hello4");
console.log(listView);
console.log("hello5");
listView.displayOnPage();
