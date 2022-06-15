//function.js
// public void sum(int a,int b) {

// }
function sum(number1, number2) { //변수 2개를 받겠다.
    let result = number1 + number2;
    console.log(result); //undefined.
    return result;
}
console.log(sum(10, 20));

function makeTd(val) {
    return '<td>' + val + '</td>';
}

function makeTr(val) {
    return '<tr>' + val + '</tr>';
}

let values = ['Hong', 'Hwang', 'Choi'];

let str = '<table border = 1>';
for (let val of values) { //배열일 경우 for of 사용
    let td = makeTd(val); //<td>Hong</td>
    str += makeTr(td); //<tr><td>Hong</td></tr>
}
str += '</table>';
document.write(str);

