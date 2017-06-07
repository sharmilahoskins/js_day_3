//Create a function that finds the highest number.
function highestNumber(array) {
  var sorted = array.sort(function(a,b) {
   return a-b
  })
  var length = sorted.length
  console.log(sorted[length-1]) //Grab the last index AFTER sorting
}

//Create a function that finds the lowest number.
function lowestNumber(array) {
  var sorted = array.sort(function(a,b) {
   return b-a
  })
  var length = sorted.length
  console.log(sorted[length-1])
}

//Create a function that finds the smallest number (the closest to zero).
var a2 = []
function smallestNumber(array) {
    array.forEach(function(el) {
      a2.push(Math.abs(el))
    	a2.sort()
    })
    return a2[0]
}
smallestNumber([4,5,0]);

//Create a function that calculate the sum.
var total = 0
function sum(array) {
  for (var i = 0; i <= array.length-1; i++) {
    total += array[i]
  }
  return total
}

// var arr = [1,2,3,4];
// var total=0;
// for(var i in arr) { total += arr[i]; }

//Create a function that calculate the mean value.

var total = 0
function mean(array) {
  for (var i = 0; i <= array.length-1; i++) {
    total += array[i]
  }
  return total/(array.length)
}

//Create a function that finds the index of the highest number.

function indexHighest(array) {
  return array.indexOf(Math.max(...array))
}

//Array of Strings

var parentsNames = ["Joe", "Cindy", "Roland", "Sheila"]
var siblingsNames = ["Marika", "Sibling2", "Fred"]

var sibSort = siblingsNames.sort() //in alphabetically order

var parentsSort = parentsNames.sort().reverse() //in reverse alphabetical

var combined = parentsNames.concat(siblingsNames) //combine arrays

combined.sort() //alphebetize

combined.sort().reverse()

//Create a function that determines if a given name is amongst the names.
var enteredName = prompt("What name are you looking for?")
function isMember(name) {
  return name === enteredName
}
if (combined.some(isMember)) {
    console.log (enteredName + " is in the list!")
  } else {
    console.log (enteredName + " is NOT in the list.")
  }

  //Advanced Functions

//Create a function that returns an array with only the even elements from the array.
var evenArray = []
function getEvens(array) {
  array.forEach(function(a) {
    if(a%2 === 0) {
      evenArray.push(a)
    }
  })
    if (evenArray.length === 0) {
      console.log("This array had no even numbers.")
    } else {
    return evenArray
  }
}


//Create a function that returns an array with only the odd elements from the array.
var oddsArray = []
function getOdds(array) {
  array.forEach(function(a) {
    if(a%2 === 1) {
      oddsArray.push(a)
    }
  })
    if (oddsArray.length === 0) {
      console.log("This array had no odd numbers.")
    } else {
    return oddsArray
  }
}


//Create a function that takes an array and a function, and returns a new array with the return value of the function on each of the elements of the array.

var newArray = []
function mapArray(array, fun) {
  array.forEach(function(element){
     newArray.push(fun(element))
  })
return newArray
}

// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
var filtArr = []
function filterArray(array, func) {
  array.forEach(function(elems){
    if (func(elems) === true) {
      filtArr.push(elems)
    }
  })
  return filtArr
}
