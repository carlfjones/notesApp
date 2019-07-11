console.log("Note Controller");

(function(exports) {
  function testingNoteControllerIsAnInstanceOfNoteController() {
    var noteController = new NoteController;

    assert.isTrue(noteController instanceof NoteController);
  };

  function testingNoteControllerChangesInnerHTML() {
    function MockNoteList() {
      this.createAndStore = function() {};
    };

    function MockNoteListView() {
      this.display = function() {
        return "<ul><li><div>I like ham</div></li></ul>"
      };
    };

    var noteController = new NoteController(MockNoteList, MockNoteListView);


    noteController.displayOnPage();
    var element = document.getElementById("app");
    console.log(element);
    console.log(element.innerHTML);
    assert.isTrue(element.innerHTML === "<ul><li><div>I like ham</div></li></ul>")
  };



  testingNoteControllerIsAnInstanceOfNoteController();
  testingNoteControllerChangesInnerHTML();


})(this);
