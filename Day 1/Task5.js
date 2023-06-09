function Vote(age){
    if(age>=18){
        console.log("Congratulations! You are eligible for voting.")
    }

    else {
        console.log("Sorry, You are not eligible")
    }
}

const age = prompt();
Vote(age);

