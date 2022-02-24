interface Person {
  name: string;
  age: number;
  male: boolean;
}

class NewPerson {
  name: string;
  age: number;
  male: boolean;

  constructor(name: string, age: number, male: boolean) {
    this.name = name;
    this.age = age;
    this.male = male;
  }
}

const newPerson: Person = new NewPerson('Daniel', 23, true);
console.log(newPerson);
