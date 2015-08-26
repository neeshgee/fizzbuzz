// for loop to count to 100
for (var i = 0; i <= 100; i++){

// multiple of 3
    var remainder = i % 3
    if (remainder == 0 ) {
      console.log("Fizz");
    }

//multiple of 5
    var remainder = i % 5
    else if (remainder == 0 ) {
      console.log("Buzz");
    }

// multiple of both 3 and 5
    var remainder = i % 15
    else if (remainder == 0 ) {
      console.log("FizzBuzz");
      }
    else {
      console.log(i);
    }
}
