function reverse(number){

  var input = number.toString();
  var output = '';
  for(var i = input.length -1; i >=0; i--){
    output += input[i];
  }
  return parseInt(output);
}

reverse(123434);
