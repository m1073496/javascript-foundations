var foodCount = 0;

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  };

  greet(rider) {
    return `Hi, ${this.rider}!`;
  };


  eat() {
    foodCount = foodCount + 1;
    if (foodCount >= 3) {
    this.hungry = false;
  } else {
    return this.hungry;
  }
  };

};



module.exports = Dragon;
