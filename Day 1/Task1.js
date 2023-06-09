function swap(a){

    var Arraylength = a.length;
    var mid = Arraylength/2;
    
    switch(Arraylength % 2==0){

    case true :{
        first = a.slice(mid);
        last = a.slice(0,mid);
        var Result = first.concat(last);
        return Result;
    }

    case false : {
        console.log("Error");
        break;
    }
}
}

const Array = [1,2,3,8];
console.log(swap(Array));