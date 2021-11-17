// 1.   Create an array that contains two of your favorite things to do

const favThings = ["hiking", "video games"];
console.log(favThings)

// 2.   Using an array method, add another thing you like to do to that list

favThings .push("eating");

console.log(favThings)

// 3.   Reverse the order of the array (remember, if needed use MDN)

favThings.reverse();
console.log(favThings)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 4.   log the length of the array

console.log(daysOfWeek.length)


// 5.   log the 4th element in the array

const strDaysOfWeek = daysOfWeek[3] //*? Is this right
console.log(strDaysOfWeek)

// 6.   Remove the first element in the array. Log the new array and the element removed from the array

console.log("This is question 6");

const firstDayOfWeek = daysOfWeek.shift();

console.log(daysOfWeek);
console.log(firstDayOfWeek);


// 7.   Put 'Sunday' back at the beginning of the array and log the new array


console.log("This is question 7");
const beginOfWeek = daysOfWeek.unshift(firstDayOfWeek);

console.log(daysOfWeek);
console.log(beginOfWeek);

// 8.   Remove the last element in the array. Log the new array and log the element removed

// 9.   Add 'Saturday' back to the end of the array and log the new array

//10.   Replace 'Thursday' with 'Friday Junior'

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

//12.   Combine these two arrays together

let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

const devices = phone.concat(laptop);
console.log(devices);

//13.   Write a line of code to test if something is an array or not
