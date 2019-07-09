function Note(text) {
  this.text = text;
};

Note.prototype.content = function () {
  return this.text;
};
