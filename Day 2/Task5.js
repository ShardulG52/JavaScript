function out(){
    var integer = 0;
    var array =[];
    function inn(input){
        if(Number.isInteger(input)){
            integer += input;
            console.log(integer);
        }
        else{
            array = [...array,input];
            console.log(array);
        }
    }
    return inn;
}

var myFunc = out();

myFunc(5);
myFunc(15);
myFunc('First');
myFunc('Second');
