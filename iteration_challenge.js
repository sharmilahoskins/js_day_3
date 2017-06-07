// for to while
// for (var i=0; i<10; i++) { console.log(i); }

var a = 0;
while (a < 10) {
  console.log(a)
  a++
}

//while to for
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }

for (var i = 10; i > 0; i--) {
  console.log(i)
}

// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
// var unduped = []
// function mergeArray(arr1, arr2) {
//   var merged = arr1.concat(arr2)
//   for(var i = 0; i < merged.length; i++) {
//     // console.log(merged[i])
//     function(a,b) {
//       if(a === b) {
//         console.log(unduped.push(a))
//       } else if (a != b) {
//         console.log(merged)
//       }
//     }
//   }
// }

var newArr = []
function mergeArray(ar1, ar2) {
  var merged = ar1.concat(ar2)
  for (var i = 0; i < merge.length; i++) {
    if (!newArr.includes(merged[i])) {
        newArr.push(merged[i])
    }
  }
}

// var arr1 = [1, 2, 3,4,5,6,7,1]
// var arr2 = [2, 30, 1]
// var merge = arr1.concat(arr2)
// var newArr = []
// for (var i = 0; i < merge.length; i++) {
//   if (!newArr.includes(merge[i])) {
//       newArr.push(merge[i])
//   }
// }
