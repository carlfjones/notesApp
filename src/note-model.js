function Note() {
  this.text = "My favourite language is Javascript";
}

Note.prototype.content = function () {
  return this.text;
};
