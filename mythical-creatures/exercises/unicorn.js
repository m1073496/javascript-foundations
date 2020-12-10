class Unicorn {
  constructor(name, color="white") {
    this.name = name;
    this.color = color;
  }

  isWhite(color) {
    if (color == "white") {
      return true;
    } else {
      return false;
    }
  };

  says(inputMsg) {
    return `**;* ${inputMsg} *;**`;
  }

};







module.exports = Unicorn;
