'use strict'



const fibonacci = () => {
    var array = [];
    for(var i = 0; i >= 0; i++){
        if(i < 2){
            array.push(i);
        }else{
            var n = array[i-1] + array[i-2];
            array.push(n);
            if(n > 350){
                break;
            }
        }
    }
    return array;
}

const isFibonnaci = (num) => {
    var array = fibonacci();
    return array.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
