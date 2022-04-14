/*
6kyu
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function(n) {
  let count=0;
  // Program Me
  while(n>0){
    if(n%2 == 0){
      n = Math.trunc(n/2)
    }else{
      count++
      n = Math.trunc(n/2)
    }
  }
  return count
}