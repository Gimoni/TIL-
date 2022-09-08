#JavaScript 기초
??? const {add} = requitre("nodemon/in/rules")

console.log ("Hello Javacsript")

# DATA TYPE
* 종류: Number, Boolean, Null, Undefined, String, BinInt, Symbol

## Number
값(cvalue): 숫자(소숫점 포함), NaN(Not a number), - Infinity, +Infinity

console.log(3);
console.log(3.14);

console.log(NaN);
console.log(typeof NaN);
console.log(100/"Hello");
console.log("hello"-1)

console.log(Infinity);
console.log(typeof Infinity);
console.log(2/0);
console.log(-2.0)

## Boolean
값: ture of false
console.log(true)
console.log(false)
console.log(typeof true)
console.log(typeof false)

## Null
의도적으로 "없음", "무효"를 나타낸다.
console.log(null); // null
console.log(typeof null); // object

### Undefined
"정의되지 않음"
var x = null; //변수선언.
console.log(x); // undefined 출력. x변수를 선언했지만 정의하지 않았으니..
console.log(typeof x) // undefined
자바스크립트의 ; semi colon은 의무가 아님.

var x = null;
console.log(x);

### String : 문자.

console.log("Hello");
console.log('Hello');

console.log(typeof "Hello") // string 문자 출력.
console.log(""); // 빈문자이기 때문에 빈줄이 출력됨.
console.log("2022"); // type 은 string임.  cuz it has ""

### BigInt
-(2^53 -1) ~ (2^53 -1) 범위 밖의 숫자를 표현 할 때 사용한다.
9000조

### Symbol
ES6 (2015년)에서 추가된 데이터 타입
객체의 속성키로 사용 할 수 있다.

### 연산자 (Operator)
종류 : 할당연산자, 수리연산자, 비교연산자, 논리연산자, 타입연산자

### 할당연산자 (assignment operator)
종류 : =, +=, -+, *=. /+, **=

=
var x = 1;
console.log(x);

+=
var x = 1;
x += 2; // x = x + 2
console.log(x);

*=
var x =1;
x *= 2;
console.log(x);

## 수리연산자 (arithemtic operator)
종류 : +, -, *, /, ++, --, **, %

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);

x++ //1을 증가 시킨다.
var x =1;
console.log(x);

console.log(2 ** 8) // 2이 8승
console.log(9 % 3) //% 백분율? 계산 

### 비교연산자 (comparison oparator)
종류 : ==, ===, !=, !==, >, <, >=, <=, ?
boolean을 return 한다.

==
value만 비교한다. 

console.log(1==1);
console.log(1=="1");
console.log(0 == false); // 언어는 0을 false, 1을 true로 정했기 때문.
console.log(1 == true);
console.log(null == undefined);
console.log( "" == false) // true
console.log( "" == 0) // true

===
value 와 type 모두 비교한다.
console.log(1 === "1"); //false
console.log(0 === false); //false
console.log(null === undefined); // false

!=
value 만 비교를 한다. 

console.log(1 != "1") //false
console.log(0 != true) //true

!==
value와 type을 모두 비교한다. 
둘중에 하나라도 다르면 true

console.log(1 !== "1"); //true
console.log(0 !== false); //true

? (삼항연산자, Ternary)
조건 ? 참잃 때 : 거짓일 때

var r = 1 > 0 ? "foo" : "bar"

console.log(r)

### 논리 연산자 (Logical operator)
종류 : &&, ||, !

&& = 그리고 = and 

var x = 1>0 && 1<2;
console.log(x); // true

|| --> 또는
var x = 1>0 || 1<-1
console.log(x); // true

! (부정 not)

console.log(!true); // false
console.log(!false); // true
console.log(!(1>0)); // false

var x = 1 > 0;
console.log(!x); // false

## 타입 연산자 (Type Operator)
종류 : typeof, instanceof
value의 타입을 return 한다.

console.log(typeof 0); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined

# 조건문 (Condition)
if / else / elseif
switch

if / else/ elseif

if 단독으로 쓰일 때
if (1 > 0) {
    console.log("foo")
}

if (1 > 2) { // false 일 경우 실행되지 않음
    console.log("foo")
}

if (1 > 0) {
    console.log ("foo")
} else {
    console.log("bar")
}

if (1>0) { // 조건이 참인 경우 
    console.log("foo")
} else if (1>2) {
    console.log("bar")
} else { // 참이 없을 경우
    console.log("baz")
}

조건 부분에 booleanㅇ 아닌 데이터 타입이 올 경우 

console.log(1>0) // 비교연산자는 boolean을 return한다.

if (true) {
    console.log("foo");
}

if ("") { // 조건에서 빈문자를 false로 취급한다.
    console.log("foo")
}

if ("Hello") { // 빈문자가 아닌 경우 true로 취급힌다.
    console.log("foo")
}

if (null) { // false
    console.log("foo");
}

if (undefined) {
    console.log("foo");
}

var x ;

if (x) { // undefined 은 false로 취급한다.
    console.log("foo");
}

if (0) { // false 보통의 언어에서 0은 false 1은 true를 나타냄.
    console.log("foo");
}

if (-2) {
    console.log("bar")
}

if (1) { // true.
    console.log("baz")
}

### switch
switch 의 비교는 엄격비교임.

var result;

엄격비교 (value와 type을 모두 비교)
===
!==

switch(3) { //switch 3 인자. 부분.
    case 1:
        result = "foo";
        break;
    case 2:
        result = "bar";
        break;
    case 3: 
        result = "baz";
        break;
    case 4:
        result = "null";
}

console.log(result);

* 반복문 (LOOP)
FOR
while

FOR 반복문

var sum = 0;

// 1에서 10까지 더하기
for (var i=0; i<=10; i++) {
    sum += i
}

console.log(sum);

for 문에서 break와 continue 키워드

for (var i=0; i<=10; i++) {
    if(i===7) {
        break;
    }
    console.log(i);
}

for (var i=1; i<=10; i++) {
    if (i===5) {
        continue;
    }
    console.log(i);
}

while

var sum = 0;

var i = 1;
while(i <= 10) {
    sum += 1;
    i++;
}

console.log(sum);

Q. 1부터 10까지의 숫자 중 짝수만 출력.

for (var i=2; i<=10; i++) {
    ;if(i<=0) {
        continue;
    }
    console.log(i++);
}

for (var i=2; i<=10; i+=2) {
    console.log(i);
}

for (let i=2; i<=10; i+=2) {
    console.log(i);
}

"use strict"

for (var i=2; i<=10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

## 함수 (FUNCTION)
호출 될 때만 실행되는 한 블록의 코드

함수를 선언하는 방식
1. 함수선언식
2. 함수표현식
3. 화살표함수

함수선언식
function f() { //function 함수이름() {block}
    //함수 정의 (function definition)
    console.log ("foo")
}

// 호출
f()

함수표현식
변수에 익명함수를 할당한다.
var f = function () {
    console.log("foo");
}

//호출
f()

화살표함수
함수표현식의 변형, 간단한 문법
var f = () => {
    console.log("foo");
}

호출
f()

Hostiong (게양)
함수선언식에서만 적용된다.

함수호출.
f();

함수 선언
함수의 선언이 호출 시점보다 위로 올라간다.
function f() {
    console.log("foo")
}

console.log(f) //undefined
f();

Hosting이 되지 않는다.
var f = () => {
    console.log("foo")
}

// 함수에서의 return

function f () {
    console.log("foo"); 
    return;
    //return 아래의 코드는 실행되지 않는다.
    console.log("bar");
}

f();

function f() {
    return console.log("foo");
    console.log("bar");
}

f();

함수의 인자 (parameter, argument)

function f(data) {
    console.log("argument:"+ data);
}

f("foo"); //"foo" - arugument

function f(a, b) {
    return a + b;
}

console.log(f(1,2));

Q. 사칙연산 함수를 만들어 보세요.
함수이름은 add(+), substract(-), multiply(*), divide(/)
함수의 return값을 변수에 담아 출력해보세요.

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var a = add(1, 2);
var b = substract(1, 2);
var c = multiply(1, 2);
var d = divide(1, 2);

console.log(a, b, c, d);

## callback
다른 함수의 인자가 되는 함수

function f1(callback) {
    var r = callback() //f1 함수의 내부에서 실행된다
    console.log(r)
}

function f2() {
    return "foo"
}

// f1(f2()) 잘못된 방법

f1(f2); // f2는 f1의 callback이다

function f1(callback) {
    var r = callback(); //f1 함수 내부에서 실행된다.
    console.log(r);
} // 잘못된 방법 예시

f1 (function() { //익명함수가 callback일 때
    return "foo";
}) // 잘못된 방법 예시

function f1(callback) {
    var r = callback();
    console.log(r);
}

function f2() {
    return "foo";
}

f1(function() { // 익명함수가 callback이다.
    return f2()
})
function f1(cb) {
    let r = cb()
    console.log(r);
}

function f2() {
    return "foo";
}

// f1(f2());

f1(f2);

function f(callback) {
    //f함수 내부에서 callback함수를 실행
    let r = callback()
    console.log(r);
}

//callback이 익명함수 일때
f(function (){
    return "foo"
})

callback에 인자가 있을 때
function f1(callback) {
    let r = callback()
    console.log(r)
}

function f2(a, b){
    return a + b;
}

// f1(f2(1, 2));
f1(function() {
    return f2(1, 2)
})

function f1(callback) {
    var r = callback(1, 2);
    console.log(r);
}

function f2(a, b){
    return a + b;
}

f1(function (x, y) {
    return f2(x, y);
})

# 변수의 종류
var, let, const

var
변수를 선언하고 값(value)을 정의한다.
var foo = "bar"
console.log(foo);

var foo; //선언
foo = "bar"; // 정의

console.log(foo);

var  foo; // 선언
foo = "bar"; // 정의
foo = "baz" // 다시 정의

console.log(foo);

var foo = "bar" //선언, 정의 
var foo = "baz" // 재선언, 재정의

console.log(foo);

ㅣet 
let foo = "bar"; //초기화
console.log(foo);

let foo; //선언
foo = "bar"; // 정의

console.log(foo);

let foo; //선언
foo = "bar"; //정의
foo = "baz" // 다시 정의

console.log(foo);

let foo = "bar"; // 선언  
let foo = "baz"; // 재선언 불가

console.log(foo);

const (constant, 상수)

const foo = "bar"; // 선언 및 정의 (초기화)
console.log(foo)

const foo; //선언
foo = "bar"; // 정의 따로 불가

console.log(foo);
const는 항상 선언과 정의를 함께 (초기화 필수.)

const foo = "bar";
const foo = "baz"; //재선언 불가

console.log(foo);

# 변수의 범위 (scope)
전역 범위 : 함수나 블록 밖에서 선언된 변수의 범위
블록 범위 : 블록 안에서 선언된 변수의 범위
함수(지역)범위 : 함수 안에서 선언된 변수의 범위

전역범위 (global scope)
const foo ="bar";

f();
function f(){
    // 함수 내부에서 정역변수에 접근 가능
    console.log(foo);
}

{   // block (조건문, 반복문)
    // 블록 내부에서 전역변수에 접근 가능
    console.log(foo);
}

// 함수, 블록이 아닌 범위에서 전역변수에 접근 가능
console.log(foo)

함수 (지역) 범위

f()
function f() {
    // 함수(지역) 범위를 갖는 변수
    let foo = "bar";
    
    //함수 내부에서 접근 가능
    console.log(foo);
}

//함수 외부에서 지역변수에 접근 불가
console.log(foo); // foo is not defined

블록 범위 (block)
{
    var foo = "foo";
    let bar = "bar";
    const baz = "baz"
}

console.log(foo) // ok
console.log(bar) //error
console.log(baz) //error

함수의 범위
전역 범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
블록 범위 : 블록 안에서 선언된 함수의 범위
함수(지역) 범위 : 함수 안에서 선언된 함수의 범위

function f() {}

// 블록 또는 함수 외부에서 접근
console.log(f);

// 블록 내부에서 접근
{ console.log(f); }

// 함수 내부에서 접근
x()
function x() {
    console.log(f)
}

f1()
function f1() {
    //지역범위를 갖는 함수
    function f2() {}
    console.log(f2);
}

console.log(f2); //error

{
    function f() {}
}

console.log(f); // ok

Q. 콘솔에 현재시간을 알려주는 시계를 만들어보세요.
setInterval(callback, ms)
ms간격으로 callback 실행
1s = 1000ms
console.log(new Date().toLocaleTimeString());


setInterval(function (){
    let time = new Date(). toLocaleTimeString();
    console.log(time);
}, 1000)

## Array (배열)
한 개 이상의 값을 가진 상태

let arr = [10, 20, 30];

console.log(arr);
// 배열의 0번째 (index) valued에 접근
console.log(arr[0]) //10
console.log(arr[2]) //30
console.log(arr.length) // 배열의 value의 갯수

let arr = ["foo", 20, "baz"];

console.log(arr); 
 
update
arr[1] = "bar"
console.log(arr);

add
arr[3] = 40;
console.log(arr);

반복문으로 Array 순회하기

let arr = ["foo", "bar", "baz"];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

Q. 1부터 10까지의 순자로 이루어진 배열을 만들어보세요.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

let arr = [];

for (let i=0; i<10; i++) {
    arr[i] = i+1;
}

console.log(arr);

# Object (객체)
관련된 데이터와 함수의 집합

const cat = {
    // key(property,속성) : value
    name: "Kitty",
    age: 2,
    home: null,
    //value 가 함수인 것을 메서드 (method)라고 부른다.
    sound: function() {
        return "meow";
    }
}

// 객체에 접근
console.log(cat);
//cat의 name속성에 접근
console.log(cat.name);
//cat의 age속성에 접근
console.log(cat.age);
//cat의 존재하지 않는 속성
console.log(cat.color); // undefined
//string을 사용해서 cat의 home 속성에 접근
console.log(cat["home"]) //null
//cat의 sound 메서드에 접근
console.log(cat.sound()) 

객체를 업데이트하기

const cat = {
    name: "Kitty",
    age: 2,
    home: null,
    sound: function() {
        return "meow";
    }
}

// cat의 home 속성값 변경
cat.home = "Mapo-gu";
console.log(cat);

//cat의 age속성 삭제
delete cat.age;
console.log(cat);

//cat에 새로운 속성 color 추가
cat.color = "Mixed"
console.log(cat)

Q. 숫자를 대입하면 4칙연산의 결과값을 return하는 함수를 만들어보세요.

function calc(a, b) {}



function calc(a, b) {
    return {
        add: a + b,
        substract: a - b,
        multiply: a * b,
        divide:  a / b 
    }
}

let r = calc(1,2);
console.log(r)
