//function.js

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(10,20));
console.log(sum('10','20')); // +

function minus(v1, v2) {
    return v1 - v2;
}

console.log(minus('20','10'));


function sumAry(ary) {
    let sum = 0;
    for (let num of numAry) {
        sum += num;
    }
    return sum;
}
let numAry = [20, 27, 33, 19, 44];
let result = sumAry(numAry);
console.log('배열의 합:' + result);

result = 0;
numAry.forEach(function(val, idx, ary) {
    console.log(val, idx, ary);
    if(val%2 != 0) {
        result += val;
    }
    //console.log(a, b, c);
}); //메소드의 매개값으로 함수(=기능): 콜백함수.
console.log('홀수 배열의 합:' + result);

