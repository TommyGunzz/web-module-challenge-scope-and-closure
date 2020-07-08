// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
  -- in Counter 1 the count is function level and will keep adding,
    counter2 count will reset being outside of  function scope level.

 * 2. Which of the two uses a closure? How can you tell?
] -- counter1 is the closure, with the nested function for counter.

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
  -- counter1- If you need the var to keep incrementing, counter2- if you need it to reset when called.
  
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
   const points = Math.floor(Math.random() * 2);
   console.log("Task 2");
   console.log(` Team scored: ${points}`);
   };
inning();


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/


function finalScore(inning,num){
  
   let home = 0;
   let away = 0;
    for(var i = 0; i < num; i++){
      if(Math.floor(Math.random() * 2 < 0.50)) {
        home++;
    } else {
        away++;
    };
    console.log("Task 3");
    console.log("Inning: "+ inning + " home:" + home + "away:" + away);
  };
};
  finalScore(5,1);


 
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */
console.log("Task 4:")
function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}
function scoreboard(inning, outs){
  let home = 0;
  let away = 0;
   for(var i = 0; i < inning + outs; i++){
     if(Math.floor(Math.random() * 2) <= .5 ) {
       home++;
   } else {
       away++;
   };
   
   console.log("inning-"+(i)+ " home:" + home + " away:" + away)
 };
};
 scoreboard(9,1);


