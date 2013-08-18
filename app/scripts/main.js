
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

var startNode;
var endNode;
var resulrNode;

var go  = function(){
    event.preventDefault();
    var start = parseInt(startNode.value,10);
    var end = parseInt(endNode.value,10);
    resultNode.innerHTML = '';
    setTimeout(function(){
        var resultVal = checkingFn(start,end);
        resultNode.innerHTML = resultVal;
    },0);
};

window.onload = function(){
    startNode = document.getElementById('start');
    endNode = document.getElementById('end');
    resultNode = document.getElementById('result');
    go();
};
