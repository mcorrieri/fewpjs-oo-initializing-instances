// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
let bfast = new Breakfast("eggs", "juice");
console.log(bfast);

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
let lunch = new Lunch("cobb salad", "pickle soup", "cokey-cola");
lunch;

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}
let dindin = new Dinner("cobb", "pickle", "pizza", "lava cake");
console.log(dindin);
