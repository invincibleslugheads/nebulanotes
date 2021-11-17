// Declare an empty array

// let arr1 = [];

// Declare an array with all the data types you can think of within it

// int, int, string, null, undefined, bool, big int, nested array
// let arr2 = [1, 64, "hello", null, undefined, true, 80n, [] ]; 

// Make a list of classmates names first names in an array

// let classmates = ["Nick", "Tom"];

// Get the length of that previous array

// let numClassmates = classmates.length;
// console.log(numClassmates);

// Check the type of the previous array

// console.log(typeof classmates);

// Check if the previous array is an array

// console.log(Array.isArray(classmates))

// Using indexing, grab your name from that previous array

// console.log(classmates[1])

// Use the following variable to get the 2nd student from the array of students
// let index = 2;

// console.log(classmates[index]) // undefined

// Update the array to have each element as a students first and last name : 'firstName lastName'

// classmates[0] = 'Nick Leask';
// classmates[1] = 'Tom Orrico';
// console.log(classmates)


// Given the following list:
// Change the element at index zero to equal itself times 10 
 let numArr = [1,2,3,4,5];

// numArr[0] = numArr[0] * 10
// console.log(numArr)


// Add an additional element to the prior array

// numArr.push(11);
// console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

// let removedItem = numArr.pop();
// console.log(numArr)
// console.log(removedItem)


// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log false

//if array doesn't contain 1, then returns -1, so bool off of -1
if (numArr.indexOf(1) > -1) {
  console.log("True")
}else{
  console.log("False")
}



// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'


// Add that item back


// Given the following array, sort it using an array method
 let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
//let sortThis = [1, 02, 10000, 3, 2];

sortThis.sort()
console.log(sortThis)


// Now reverse the prior array

sortThis.reverse()
console.log(sortThis)
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let hungry = "My favorite foods are za, pineapple, hawaiian-pizza"

// Convert the prior string into an array of words (don't worry about where punctuation lands)

let arrOfHungry = hungry.split(" ")
console.log(arrOfHungry)

//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

let strOfHungry = arrOfHungry.join("-")
console.log(strOfHungry)


// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

// let numberss = [1,2,3,4,5,7,8,9,10]

// numberss.splice(5, 0, 6)
// console.log(numberss)

// Create two arrays and, using JavaScript join them together



// Create a multi-dimensional array


// let nestedArr = [1,2,3,[4,5,6,[7,8,9]],10]
// console.log(nestedArr)
// console.log(nestedArr[3][3][0]) //go through max elements of first array to get to second then same to get to third



let nestedArr = [1,2,3,[4,5,6,[7,8,9]],10]

for (let i=0; i< nestedArr.length; i++){ // proper syntax
  console.log(nestedArr[i]);
}



const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."

let vowelCount = 0;

for(let i=0; i < famousQuote.length; i++){
  let currentLet = famousQuote[i]
  if ("aeiouy".indexOf(currentLet.toLowerCase()) > -1){
    console.log(vowelCount)
    console.log(currentLet)
    vowelCount++
  }
}



// `console.log()` all of the vowels.
// console.log all vowels and store the amount of vowels in a variable called vowelCount after log the vowelCount.