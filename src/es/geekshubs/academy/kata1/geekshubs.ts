
export function fizzBuzz(input : Number) : String {
   var res = "";

   for(var i = 1; i<=input; i++){
       if( i % 3 == 0)
        res += "Fizz" + "\n";
       else if( i % 5 == 0)
        res += "Buzz" + "\n";
       else 
        res += i +"\n";
   }

   return res;
};

