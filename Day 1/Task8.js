function decimalToBinary(number){
    var answer = "";
while(number>0){
    
    var reminder = parseInt( number%2);
    number = parseInt( number/2);
    answer = answer + reminder;
}
console.log(answer.split("").reverse().join(""));
}

num = 5;

console.log(decimalToBinary(num));