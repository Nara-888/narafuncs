function passValidator(password) {

    function isLengthRequirementMet (entry){
        if (entry.length >= 6 && entry.length <= 10) {
            return true;
            
        }else{
            return false;
        }
        
    }
    function onlyLettersAndDigits (entry) {
        let entryArray = entry.split();
        for (let index = 0; index < entryArray.length; index++) {
            let currentElement = entry[index];
            if((currentElement.charCodeAt() >=48 && currentElement.charCodeAt() <=57 )
            || (currentElement.charCodeAt() >=65 && currentElement.charCodeAt() <= 90)
            || (currentElement.charCodeAt() >=97 && currentElement.charCodeAt() <=122)){
                return true;
            }else{
                return false;
            }

            
            
        }
    }
    
    function hasTwoDigits(entry) {
        let arr1 = [];
        for (let el of entry) {
            
            if (el.charCodeAt() >=48 && el.charCodeAt() <=57) {
                arr1.push(el)
            }
            
        }
        if(arr1.length >= 2){
            return true;
        }else{
            return false;
        }
    }
    if(isLengthRequirementMet(password) && onlyLettersAndDigits(password) && hasTwoDigits(password)){
        console.log("Password is valid");
    }
    if (!isLengthRequirementMet(password)) {
        console.log("Password must be between 6 and 10 characters");
        
    } 
    if (!onlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        
    }
    if (!hasTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
    
}
passValidator('Pa$s$s')


function passwordValidator(password) {
    function isLongEnough(entry) {
        return entry.length >=6 && entry.length <=10;   // this is a condition!
        
    }
    function onlyLettersAndDigits(entry) {
        for (let currentCharIndex of entry) {
            let currChar = currentCharIndex.charCodeAt(0); //number representation of 1st char
            if (!(currChar >= 65 && currChar <=90) &&
            !(currChar >=97 && currChar <=122) &&
            !(currChar >=48 && currChar <= 57)) {
                return false;
                
            }
        }
        return true;
        
    }
    function atLeastTwoDigits(entry) {
        let countDigits = 0;
        for (let charIndex of entry) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >=48 && currChar <=57) {
                countDigits++;
            }
            
        }
        return countDigits >=2 ? true : false;
    }
    let isPassLongEnough = isLongEnough(password);
    let containsLettersAndDigits = onlyLettersAndDigits(password);
    let twoDigits = atLeastTwoDigits(password);

    if (isPassLongEnough && containsLettersAndDigits && twoDigits) {
        console.log("Password is valid");
    }
    if (!isPassLongEnough) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!containsLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!twoDigits) {
        console.log("Password must have at least 2 digits");
    }

}
passwordValidator('MyPass123')
passwordValidator('Pa$s$s');
passwordValidator('logIn');