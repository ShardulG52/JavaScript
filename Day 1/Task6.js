function func(name,callBackFunction){
    console.log("Hello...."+name);
    callBackFunction;
}

function callBackFunction(){
    console.log("It's callback function")
}

console.log(func("Shardul",callBackFunction));