module.exports = function zeros(expression) {
   var arr = expression.split("*");
   var numbersOfTwos = 0;
   var numbersOfFives = 0;
   for (let i = 0; i < arr.length; i++) {
     var num = parseInt(arr[i]);
     if (arr[i].includes("!!")) {
       if (num %2==0) {
         for (let j = 2; j <= num; j+=2) {
          var n = j;
          while (n%2==0) {
            numbersOfTwos += 1;
            n = n/2;
          } 
         }
         for (let j = 10; j <= num; j+=10) {
          var n = j;
          while (n%5==0) {
            numbersOfFives += 1;
            n = n/5;
          } 
         }
       } else {
        for (let j = 5; j <= num; j+=10) {
          var n = j;
          while (n%5==0) {
            numbersOfFives += 1;
            n = n/5;
          } 
         }
       }       
     } else {
      for (let j = 2; j <= num; j+=1) {
        var n = j;
        while (n%2==0) {
          numbersOfTwos += 1;
          n = n/2;
        } 
        var m = j;
        while (m%5==0) {
          numbersOfFives +=1;
          m = m/5;
        }
       }
     }
   }
   return Math.min(numbersOfFives, numbersOfTwos);
} 