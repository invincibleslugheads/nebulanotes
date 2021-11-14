//Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'

let remainder = 15 % 2;
console.log("The remainder of 15/2 is " + remainder)

//Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)'


let leftOver = 30 % 2;
console.log("The remainder of 30/2 is " + leftOver)


//Using Math.random(), console.log 3 random decimal numbers from 0 to 1000

console.log(Math.random()*10)

//Using Math.random(), console.log 3 random whole numbers from 0 to 1000

//let randomNum = Math.random()*1000;

console.log(Math.round(Math.random()*1000));
console.log(Math.random()*1000);
console.log(Math.random()*1000);


//In your own words describe what "type coercion" in JavaScript is - this can be brief.

	/* this is the process of converting or chaning one data type (example: integer) to another data type (example: string). This can happen automatically or if prompted to with indentifiers through the compiler or when the program is running. */

  /*1. Temperature Converter Lab
     Objective: Create a program that can convert temperature from Fahrenheit, to Celsius, or Kelvin and back.  
        Instructions:
            1. Given a temperature in Fahrenheit write the code that converts Fahrenheit to its equivalent Celsius & Kelvin values
            2. Given a temperature in Celsius write the code that converts Celsius to its equivalent Fahrenheit & Kelvin values
            3. Given a temperature in Kelvin write the code that converts Kelvin to its equivalent Fahrenheit & Celsius values
                 Note: Conversion formula: http://www.csgnetwork.com/temp2conv.html.
                 Note: Sample temperatures: 32f = 0c = 273.15K.*/


let currTemp = 64;


let fahrToCels = (currTemp - 32) / 1.8
let fahrToKelv = (currTemp + 459.67) / 1.8
let celsToFahr = currTemp * 1.8 + 32
let celsToKelv = currTemp + 273.15
let kelvToCels = currTemp - 273.15
let kelvToFahr = currTemp * 1.8 - 459.67


console.log("64 degrees from Fahrenheit in Celsius is " + Math.round(fahrToCels));
console.log("64 degrees from Fahrenheit in Kelvin is " + Math.round(fahrToKelv));
console.log("64 degrees from Celsius in Fahrenheit is " + Math.round(celsToFahr));
console.log("64 degrees from Celsius in Kelvin is " + Math.round(celsToKelv));
console.log("64 degrees from Kelvin in Celsius is " + Math.round(kelvToCels));
console.log("64 degrees from Kelvin in Fahrenheit is " + Math.round(kelvToFahr));


//   2. Create a variable and assign the string: "we are coders!",
//       then In ONE LINE - extract the word "coder" and log it.


let declar = 'We are Coders';
console.log(declar.slice(7, 12));

// After completing push your file to github:
// Make sure to add a link to your file as your hw submission!