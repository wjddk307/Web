//function3.js

function sumNumber() {
   console.log(arguments); //함수가 호출되면 arguments 객체.
   let result = 0;
   for (let i=0; i<arguments.length; i++) {
        result +=arguments[i];
   }
   return result;
}
sumNumber(1, 2, 3, 4, 5);
//sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

//나머지 파라미터.
function sumParam(...args) { //args:변수이름(매개변수) //객수가 가변적으로 처리.배열.
      let result = 0;
      args.forEach((val,idx) => {
           result += val;
      }); //callback함수.
      return result;
}

console.log(sumParam(1, 2, 3, 4, 5, 6));

//커링함수.
function orderSet(burger, beverage) {
    console.log('버거: ' + burger + ',음료: ' + beverage);
}
orderSet('치즈버거', '콜라');

function orderSet_curring(burger) { //함수 리턴예제
    return function(beverage) {
        console.log('버거: ' + burger + ',음료: ' + beverage);
    }
}

let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); //()함수실행.
beverageFnc('환타');
orderSet_curring('치즈버거')('콜라');

function orderSet(burger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetchup(yn) {
                return function orderChicken(count) {
                    console.log('세트: ' + burger + ", " + beverage + ", " + side + ", 케첩(" + yn + "), 조각치킨(" + count + "개)" );
                }
            }
        }
    }
}

let order = orderSet('치즈버거')('콜라');
order('프렌치후라이')('y')('2');

let args = [1, 3, 5];
function anyFnc(...args) {

}

let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2]; //두 배열요소를 합쳐서 새로운 배열.
console.log(args.concat(another));

let obj1 = {name: 'Hong', age: '20', weight:63.7};
let newObj = {name:'Choi', age:15, height:165.5};
let obj3 = {sno: '12345'};
let obj2 = {...newObj, ...obj1, ...obj3}; //new object(); //...:펼침연산자.
console.log(obj1,obj2);

let comObj = {
    sno:'22-010101',
    sname:'Hong',
    score:80,
    hobby:['reading','eating'],
    pet:[{cname:'야옹이', age:2},{dname:'멍멍이', age:3}]
}

comObj.sname; //이름.
comObj.hobby[0]; // reading
comObj.pet[0].age;//2

console.log(comObj.pet[1].dname);


function restparams(...args){
    console.log(args);
}
restparams(1,2,3,4);

const rest2 = (arg1, arg2, ...args) => {
   console.log([arg1,arg2,args]);
}
rest2(1,2,3,4);
rest2(1,2);
rest2(1);

function sum(a, b, ...args){
    let result = 0;
    if(a != undefined){result = a;}else{return 0;}
    if(b != undefined){result += b;}
    args.forEach(function(arg){
        result += arg;
    })
    return result;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2));
console.log(sum(1));

const sum1 = (a, b, ...args)=>{
    let result = 0;
    if(a !=undefined){result = a;}else{return 0;}
    if(b !=undefined){result += b;}
    result += args.length > 0 ? args.reduce((subsum,arg)=>subsum+=arg) : 0;
    return result;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2));
console.log(sum(1));

var a = 1;
var b = 5;

function outerFunc() {
    var b; //hosting.
    function innerFunc(){
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a);
    b = 2;
    console.log(b); //2
}
outerFunc();
console.log(b); //5
