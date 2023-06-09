function checkArray(Array1, Array2){

    if(Array1.length == Array2.length){

        Array1.sort(function(a,b){return a-b});
        Array2.sort(function(a,b){return a-b});

        flag = 0;
        for(i=0 ; i< Array1.length ; i++){
            if(Array1[i]!==Array2[i]){
                flag=1;
                break;
            }
        }

        if(flag==0){
            console.log("Same");
        }

        else{
            console.log("Not Same");
        }
    }
    else{
        console.log("Size of the array is not equal");
    }
}

Array1 = [2,5,9,10];
Array2 = [5,9,10,2];

console.log(checkArray(Array1,Array2));