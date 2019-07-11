console.log("Note Controller");

(function(exports) {
  function testingNoteControllerIsAnInstanceOfNoteController() {
    var noteController = new NoteController;

    assert.isTrue(noteController instanceof NoteController);
  };

  testingNoteControllerIsAnInstanceOfNoteController();

})(this);
