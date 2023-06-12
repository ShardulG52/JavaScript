function exceptionHandling(input1, input2){
    try{
        if(Number.isInteger(input1) && Number.isInteger(input2)){
            if(input2!==0){
                console.log(input1/input2)
            }
            else {
                throw "Denominator cann't be zero"
            }
        }
        else {
            throw "Both input should be of integer type"
        }
    }
    catch(error){
        console.log(error)
    }
}
exceptionHandling(5,"Shardul");
exceptionHandling(24,12);
exceptionHandling(4,0);