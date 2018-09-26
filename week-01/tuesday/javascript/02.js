function add(x, y) {
  let sum = x + y;
  return sum;
}
// console.log("2 + 2 is", add(2, 2))

function greeting(name, surname) {
  if (surname == undefined) {
    return "yo " + name;
  }
  console.log('== this only runs with a surname');
  return "Good afternoon " + name + " " + surname;
}

// console.log(greeting('Gerben', 'Neven'))
// console.log(greeting('mate'))


// let age = 42;

// console.log(age == 16)

function allowedEntry(age) {
  const minimumAge = 18;
  // check for equal or greater than
  let allowedIn = false;
  if (age == minimumAge) {
    allowedIn = true;
  } else if (age > minimumAge) {
    allowedIn = true;
  } else {
    allowedIn = false;
  }
  return allowedIn;
}

function deny() {
  console.log("access denied")
}

function allow() {
  console.log("access granted")
}

// let age = 24;
// if (allowedEntry(age)) {
//   allow()
// } else {
//   deny()
// }

function doWeKeepGoing(count) {
  if (count == 100) {
    return false
  }
  return true
}

// for (let count = 0; doWeKeepGoing(count); count += 1) {
//   console.log("the count is " + count)
// }

const sayHi = (name) => {
  return console.log("hi " + name)
}
sayHi('class')
