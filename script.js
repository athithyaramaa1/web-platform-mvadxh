// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
var arr = [];

for(var i = 0; i<=100 ; i+=2){
  arr.push(i);
}

console.log(arr)
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var brr = [];
var i = 1;

while(i<100){
  brr.push(i)
  i += 2
}

console.log(brr)
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

var crr = []
var i = 0

do{
  i+= 3
  crr.push(i)
}while(i<99)
console.log(crr)

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
var prime =[]

for (var i = 2; i<100; i++){
  for (var multi = 2; multi < i; multi++){
    if (i%multi == 0)
    break;
    }
    if ( i == multi)
    prime.push(i)
  }

console.log(prime);
