'use strict';

var getFactorial = function(num){
    if(num === 0) return 1;
    if(num === 1) return 1;
    if(num === 2) return 2;
    if(num === 3) return 6;
    if(num === 4) return 24;
    if(num === 5) return 120;
    if(num === 6) return 720;
    if(num === 7) return 5040;
    if(num === 8) return 40320;
    if(num === 9) return 362880;
    //return getFactorial(num-1)*num;
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
var resultNode;

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
    startNode.value = 0;
    endNode.value = 2540160;//7*9!
    go();
};
