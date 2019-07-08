var assert = {
  isTrue: function(textInNote) {
    if (!textInNote) {
      throw new Error("Assertion failed: " + textInNote + " is not truthy");
    }
  }
};
