interface Inputs {
  a: number,
  b: number
}

const printOperations = (a: number, b: number) => {
  console.log(a + b)
}

printOperations(1, 2) // This is fine
printOperations(1, '2') // This will throw a type error.
