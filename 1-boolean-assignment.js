//should i be reading these in another way or do I keeep doing it they way I have been: copy text from github and create a new .js file and then paste the assignment.
//I also took from Intro_To_JavaScript directory from VS Code and copied the .js files into my Notes folder




//1. Write a statement that checks if 2 and 'two' are equal

if (2 === "2"){

  console.log("True")
}else{
  console.log("False")
}

//2. Write a statement that checks if '2' and 2 are loosely equal

if (2 == "2"){

  console.log("True")
}else{
  console.log("False")
}

//3. Write a statement that checks if 14 and '14' are strictly equal

if (14 == "14"){

  console.log("True")
}else{
  console.log("False")
}

//4. Write a statement that checks if 10 is greater than -100

if (10 > -100){

  console.log("Greater")
}else{
  console.log("Less Than")
}

//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4

if (4 === Math.round(4.4)){

  console.log("Equal")
}else{
  console.log("NOT Equal")
}



//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up

if (10 >= Math.round(9.1)){

  console.log("Equal")
}else{
  console.log("NOT Equal")
}



//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4

if(10 > 2 && 3 > 4){
  console.log("Whole thing is true")
}else{
  console.log("All or part is false")

}

  // 7.a Without changing any of the numbers, or their order. How do we make this print true?

  console.log("#7a")
  if(10 > 2 || 3 > 4){
    console.log("Whole thing is true")
  }else{
    console.log("All or part is false")
  
  }

//8. Pick a number between 1-20 and assign it to a variable
  // This is the number of watermelons you purchased.
  //
  // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
  // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
  // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
  // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
  // If your number of watermelons is more than 15, print, 'Did you have a coupon?'

  // let wMelonPurch = Math.floor(Math.random()*20)
  // console.log(wMelonPurch)


  //*? Can this work
  // switch(wMelonPurch){
  //   case (wMelonPurch = 1):
  //     console.log("Looks like you like watermelon");
  //     break;
  //   case (wMelonPurch = 2):
  //     console.log("Yes, Strawberries are available for purchase");
  //     break;
  //   case (wMelonPurch > 2):
  //     console.log("Yes, Strawberries are available for purchase");
  //     break;
  //   case (wMelonPurch > 5):
  //     console.log("Yes, Bananas are available for purchase");
  //     break;
  //   case (wMelonPurch > 10):
  //     console.log("Yes, Bananas are available for purchase");
  //     break;
  //   default:
  //     console.log(`Sorry, you have ${wMelonPurch} watermelons.`);
  // }

  let wMelonPurch = Math.floor(Math.random()*20);
  console.log(wMelonPurch)
  
  if(!(wMelonPurch == 1 || wMelonPurch == 2)){
    console.log("Looks like you like watermelon");
  }else if(wMelonPurch > 2){
    console.log("Thats a lot of watermelon");
  }else if(wMelonPurch > 5){
    console.log("Thats too many watermelon!");
  }else if(wMelonPurch > 10){
    console.log("You must be CRAZY for watermelon!");
  }else if(wMelonPurch > 15){
    console.log("Did you have a coupon?");
  }else{
    console.log(`Sorry, you have ${wMelonPurch} watermelons.`);
  }




//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"

// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement?
  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 

  // Pseudocode:
    // variable that holds a randomly generated number
    // variable for holding the question
    // switch statement that picks responses based on the random number variable 

// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 

  // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?