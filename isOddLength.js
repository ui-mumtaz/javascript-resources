// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
  // your code here
   var output = word.length;
    if (output % 2 == 0){
       return(true);
    }
    else{
       return(false);    
    }
}
isOddLength('special')
