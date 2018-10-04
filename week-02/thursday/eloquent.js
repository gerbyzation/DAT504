// Pure function example
// Given the same input, always the same output, eg, add(2, 2) will always print
// 4
function add (a, b) {
  return a + b;
};

// Unpure function
// Output is not always the same
function currentTime() {
  return Date.now()
}

// Eloquent exercise: count beans
function countBs(word) {
  return countChar(word, 'B')
}

function countChar(word, character) {
  let count = 0;
  for (var i = 0; i < word.length; i++) {
    const currentChar = word[i];
    if (currentChar == character) {
      // count = count + 1;
      count++
    }
  }
  return count
}

console.log(countBs("BarBeque"))
console.log(countChar("Barbeque", "q"))
console.log(countChar("kakkerlak", "k"))

// Eloquent exercise: is even
function isEven(num) {
  if (num == 0) {
    return true
  } else if (num == 1) {
    return false
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
