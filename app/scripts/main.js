
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
        if(i === sum){ result.push(i); }
    }
    console.log('ok');
    console.log(result);
    return result;
};

//checkingFn(0,1000);

var go  = function(){
    event.preventDefault();
    var start = parseInt(document.getElementById('start').value,10);
    var end = parseInt(document.getElementById('end').value,10);
    var resultNode = document.getElementById('result');
    resultNode.innerHTML = '';
    setTimeout(function(){
        var resultVal = checkingFn(start,end);
        resultNode.innerHTML = resultVal;
    },0);
};
