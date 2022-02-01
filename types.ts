interface Person {
  name: string;
  age: number;
}

class NewPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newPerson: Person = new NewPerson('Daniel', 23);
console.log(newPerson);
