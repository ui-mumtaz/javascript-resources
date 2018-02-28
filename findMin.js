// function show (n) {
  
//   var output = '';
//   for(var i=0; i < n; i++){
    
//     if(i % 2 === 0) {
//       output += '+';
//     }
//     else {
//       output += '-';
//     }
//   }
//   return output;
// }

// show(3);



// function findMin (n) {
//   var temp = n[0];
//   for(var i=0; i <n.length; i++) {
//     if(temp > n[i+1]) {
//       temp = n[i+1];
//     }
//     else {
//       temp = temp;
//     }
//   }
//   return temp;
// }

// findMin([2,3,5,6,1]);


function disOrder (n) {
  var output = 0;
  var temp = '';
  for(var i = 1; i <= n; i ++ ) {
    //console.log(output);
    temp += output;
    output += (3*i);
  }
  return temp;
}
disOrder(5);

