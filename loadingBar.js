function loadingBar(number){
    if (number === 100) {
        console.log("100% Complete!" + "\n"+"[%%%%%%%%%%]");
    }else{
        function loaded(something) {
            let times = something/10;
            let result = (something+'% ') + "["+"%".repeat(times)+".".repeat(10-times)+"]"+"\n"+"Still loading..."
            
            return result;
         
        }    

    }
    console.log(loaded(number));

}

loadingBar(30)