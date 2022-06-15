//variable2.js
var l1; //hoisting

let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27]; //선언 & 초기화
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100;

console.log(typeof ary[7]);

for(let i =0; i < ary.length; i++) { //for in
    console.log(i + '번째 ' + ary[i]);
}

ary = ['사과','바나나','고구마','수박',32];

console.clear(); //로그 지우기.
document.write('<ul>');
for(let sol of ary) { //for of
    console.log(sol); //콘솔창
    document.write('<li>' + sol + '</li>') //화면창
}
document.write('</ul>');

ary = [
    {name:'권유정',age:22,phone:'010-1111-2222'},
    {name:'김민지',age:24,phone:'010-0000-2222'},
    {name:'박창우',age:26,phone:'010-1111-3535'},
    {name:'김혜인',age:35,phone:'010-1111-9254'}
]

// document.write('<ul>');
// for(let person of ary) {
//     document.write('<li>' + person['name'] + ', ' + person['phone'] + '</li>');
// }
// document.write('</ul>');
let str = '';
str += '<ul>';
for(let person of ary) {
    str += '<li>이름: ' + person['name'] + ', 나이: ' + person['age'] + ', 연락처: ' + person['phone'] + '</li>';
}
str += '</ul>';
//<table><tr><td>홍길동</td><td>20</td><td>010-1111-2222</td></tr>...</table>
str = '<table border=1>';
for(let person of ary) { 
     str +='<tr>';     
    for(let field in person) {
        str +='<td>' + person[field] + '</td>';
    }  
    str +='</tr>';    
} 
str += '</table>';
console.log(str);
document.write(str);


const v1 = 'hello'; //상수는 새로 값 할당 불가
//v1 = 'new';
// 원시타입 vs 참조타입.
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1,n2);

let o1 = {name:'one'};
let o2 = o1;
o2.name = 'two';
o1.name = 'three';
console.log(o1,o2);

const obj =  {
    sno: '22-12345',
    sname: 'Hong'
}
obj.sno = '22-22222'; //obj 상수변수에 값을 새롭게 선언x, obj 참조하는 속성의 값을 변경o.
//obj = ''; //새로운 값 할당 => 오류.
//필드 값 변경은 괜찮

//var vs let : 변수선언.
//var 변수선언 : 변수의 scope => 전역변수(스크립트 안 모든)/ 지역변수(함수안에서 선언되어진)
let var1 = 'hello'; 
//let var1 = 'new hello'; => 오류
{
    let var1 = 'new hello';
    console.log(var1);
} //let 중복: 블록안에 들어가면 유효한 값을 가지다가 블록이 종료되면 사라짐
  

function localFnc() {
    let var2 = 'nice'; //지역변수(local variable)
    console.log(var2);
    console.log(var1);
}
localFnc(); //함수호출.
//console.log(var2); => 오류
//console.log(var1); => 정상출력.

console.log(l1);
var l1 = 'hello';
var l1 = 'hello'; //var 중복 : 오류 안내보냄.
console.log(l1);
var num;
for(num of ary) {
    console.log(num);
}
console.log(num)