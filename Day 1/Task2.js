function Calculator(num1 , num2 , operand){

    switch(operand){

        case '+' : {
            var sum = num1+ num2;
            console.log("Addition of "+num1+" & "+num2+" is "+sum);
            break
        }

        case '-' : {
            var subtract = num1-num2;
            console.log("Subtraction of "+num1+" & "+num2+" is "+subtract);
            break
        }

        case '/' : {
            var division = num1/num2;
            console.log("Division of "+num1+" & "+num2+" is "+division);
            break
        }

        case '*' : {
            var multiply = num1 * num2;
            console.log("Multiplication of "+num1+" & "+num2+" is "+multiply);
            break
        }

    }
}


console.log(Calculator(2,3,'*'));