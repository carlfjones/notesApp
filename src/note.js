function Note() {
  this.text = "My favourite language is Javascript";
}

Note.prototype.notes = function () {
  return this.text;
};
