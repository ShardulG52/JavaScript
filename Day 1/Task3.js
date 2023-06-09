function MaxDiff(a){

    if(a.length >=5){
        maxDiff = 0;
        for(i=0 ; i<a.length ; i++){
            diff= Math.abs(a[i]-a[i+1]);
            if(diff>maxDiff){
                maxDiff= diff;
            }
        }
        console.log(maxDiff);

    }

    else{
        console.log("Minimum 5 elements are required");
    }

}

const Array = [1,2,3,9,10];
console.log(MaxDiff(Array));