function reverseWords() {
  
  var message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
  

        //var splitString = str.split("")
        var string = message.join('');
        console.log(string);
        //return string.split(" ").reverse().join(" ");
        
        var array = string.split(" ");
         var result="";
         for (var i = array.length-1; i >=0; i--) {
             result+=array[i]+" ";
         }
        return result;
}
reverseWords();
