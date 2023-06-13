class Marks {

    constructor(subjectName , mark){
        this.subjectName= subjectName;
        this.mark = mark;
    }
    test(){
        
        console.log(this.subjectName+" "+this.mark);
    }
}

export{Marks};