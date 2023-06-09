function ObjDetails(obj){
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.values(obj).length);
}

var student = {
    name : "Shardul Gautam",
    empId : 71453
};
console.log(ObjDetails(student));