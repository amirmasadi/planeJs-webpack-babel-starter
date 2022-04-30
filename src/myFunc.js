class Person {
  constructor(title, age) {
    this.title = title;
    this.age = age;
  }

  sayHello() {
    if (this.age > 18) console.log("welcome" + " " + this.title);
    else console.log("your under age...kid.");
  }
}

export default Person;
