function FizzBuzz(){
    for (let i = 0; i < 151; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log("FizzBuzz");
        }
        if (i % 5 == 0) {
            console.log("Buzz");
        }
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}

FizzBuzz();