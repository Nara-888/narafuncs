function printCertificate(grade, names) {
    
    if(pass(grade)){
        printHeader();
        printName(names);
        formatGrade(grade);


    }else{
        console.log("Student does not qualify");
    }

    
}

function printHeader() {

    console.log('~~~- {@} -~~~');
    
    console.log('~- Certificate -~');
    
    console.log('~~~- ~---~ -~~~');
    
}


function printName(nameArr) {

    console.log(nameArr[0] + ' ' + nameArr[1]);
    
}

function formatGrade(grade) {
    let formatted = grade.toFixed(2);
    let description;

    if(grade < 3){
        formatted = "2";
        description = "Fail";
        

    }else if(grade <3.50){
        description = "Poor"
    }else if(grade < 4.5){
        description = "Good"
    }else if(grade < 5.5){
        description = "Very good"
    }else{
        description = "Excellent"
    }
    console.log(`${description} (${formatted})`)
    
}

function pass(grade) {

    return grade >=3;
}



printCertificate(5.25, ["John", "Smith"]);
printCertificate(4.30, ["Peter","Robert"]);