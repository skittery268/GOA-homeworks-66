// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized, and remaining letters lowercased.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = (str) => {
  if (str === "" || str === " ") {
    return false
  }
  
  const x = str.split(" ")
  let y = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== "") {
      y.push(x[i]);
    }
  }
  let newArr = [];
  
  for (let i = 0; i < y.length; i++) {
    newArr.push(y[i][0].toUpperCase() + y[i].slice(1));
  }
  
  let h = "#";
  
  for (let i = 0; i < newArr.length; i++) {
    h += newArr[i];
  }
  
  if (h.length > 140) {
    return false
  } else if (h.length > 1) {
    return h
  } else {
    return false
  }
}