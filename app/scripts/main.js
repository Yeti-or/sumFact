console.log('\'Allo \'Allo!');

var getFactorial = function(num){
    if(num === 0) return 1;
    return getFactorial(num-1)*num;
};

var checkingFn = function(from,to){
    var result = [];
    for(var i=from;i<=to;i++){
        var numbers = (i.toString());
        var sum = 0; 
        for(var j=numbers.length;j--;){
            sum += getFactorial(parseInt(numbers[j],10));
        }
        console.log(i+'_'+sum);
        if(i === sum){ result.push(i); }
    }
    console.log('ok');
    console.log(result);
};

checkingFn(0,1000);
console.log(getFactorial(5));
