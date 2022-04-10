function nXnMatrix(n) {
    
    function rows (num) {
        let rowOne = (num +' ').repeat(num);
        return rowOne + "\n";
    }
    function columns(mun) {
        for (let i = 1; i < mun; i++) {
            return rows(mun).repeat(mun);
            
        }
    }
    console.log(columns(n));

}
nXnMatrix(7)