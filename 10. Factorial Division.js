function factorialDivision(num1, num2) {
    
    function factorialCalculator(num) {
        let result = 1;
        while (num != 1){
            result *= num;
            num -= 1;
        }
        return result;
    }
    let finalResult = factorialCalculator(num1)/ factorialCalculator(num2);
    console.log(finalResult.toFixed(2));
}
factorialDivision(5,2);
factorialDivision(6,2);