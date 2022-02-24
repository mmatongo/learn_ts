/* 
 * This is my attempt at some kind of type checking.
 * A switch case could do better on this logic but
 * I am currently too lazy to implement that.
 */

const person = (name, age, male) => {
  if(typeof(name) != "string"){
    console.log('The variable `name` can only accept values of type string')
  } else {
    console.log(name)
  }

  if (typeof(age) != "number"){ 
    console.log('The variable `age` can only accept values of type number')
  } else {
    console.log(age)
  }

  if (typeof(male) != "boolean"){ 
    console.log('The variable `male` can only accept values of type boolean')
  } else {
    console.log(male)
  }
}

person(1,'23', 'true') // This will throw errors
person('Daniel', 23, true) // This works
