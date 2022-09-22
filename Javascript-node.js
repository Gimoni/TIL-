// #JavaScript 기초
// ??? const {add} = requitre("nodemon/in/rules")

// console.log ("Hello Javacsript")

// # DATA TYPE
// * 종류: Number, Boolean, Null, Undefined, String, BinInt, Symbol

// ## Number
// 값(cvalue): 숫자(소숫점 포함), NaN(Not a number), - Infinity, +Infinity

// console.log(3);
// console.log(3.14);

// console.log(NaN);
// console.log(typeof NaN);
// console.log(100/"Hello");
// console.log("hello"-1)

// console.log(Infinity);
// console.log(typeof Infinity);
// console.log(2/0);
// console.log(-2.0)

// ## Boolean
// 값: ture of false
// console.log(true)
// console.log(false)
// console.log(typeof true)
// console.log(typeof false)

// ## Null
// 의도적으로 "없음", "무효"를 나타낸다.
// console.log(null); // null
// console.log(typeof null); // object

// ### Undefined
// "정의되지 않음"
// var x = null; //변수선언.
// console.log(x); // undefined 출력. x변수를 선언했지만 정의하지 않았으니..
// console.log(typeof x) // undefined
// 자바스크립트의 ; semi colon은 의무가 아님.

// var x = null;
// console.log(x);

// ### String : 문자.

// console.log("Hello");
// console.log('Hello');

// console.log(typeof "Hello") // string 문자 출력.
// console.log(""); // 빈문자이기 때문에 빈줄이 출력됨.
// console.log("2022"); // type 은 string임.  cuz it has ""

// ### BigInt
// -(2^53 -1) ~ (2^53 -1) 범위 밖의 숫자를 표현 할 때 사용한다.
// 9000조

// ### Symbol
// ES6 (2015년)에서 추가된 데이터 타입
// 객체의 속성키로 사용 할 수 있다.

// ### 연산자 (Operator)
// 종류 : 할당연산자, 수리연산자, 비교연산자, 논리연산자, 타입연산자

// ### 할당연산자 (assignment operator)
// 종류 : =, +=, -+, *=. /+, **=

// =
// var x = 1;
// console.log(x);

// +=
// var x = 1;
// x += 2; // x = x + 2
// console.log(x);

// *=
// var x =1;
// x *= 2;
// console.log(x);

// ## 수리연산자 (arithemtic operator)
// 종류 : +, -, *, /, ++, --, **, %

// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 * 2);
// console.log(1 / 2);

// x++ //1을 증가 시킨다.
// var x =1;
// console.log(x);

// console.log(2 ** 8) // 2이 8승
// console.log(9 % 3) //% 백분율? 계산 

// ### 비교연산자 (comparison oparator)
// 종류 : ==, ===, !=, !==, >, <, >=, <=, ?
// boolean을 return 한다.

// ==
// value만 비교한다. 

// console.log(1==1);
// console.log(1=="1");
// console.log(0 == false); // 언어는 0을 false, 1을 true로 정했기 때문.
// console.log(1 == true);
// console.log(null == undefined);
// console.log( "" == false) // true
// console.log( "" == 0) // true

// ===
// value 와 type 모두 비교한다.
// console.log(1 === "1"); //false
// console.log(0 === false); //false
// console.log(null === undefined); // false

// !=
// value 만 비교를 한다. 

// console.log(1 != "1") //false
// console.log(0 != true) //true

// !==
// value와 type을 모두 비교한다. 
// 둘중에 하나라도 다르면 true

// console.log(1 !== "1"); //true
// console.log(0 !== false); //true

// ? (삼항연산자, Ternary)
// 조건 ? 참잃 때 : 거짓일 때

// var r = 1 > 0 ? "foo" : "bar"

// console.log(r)

// ### 논리 연산자 (Logical operator)
// 종류 : &&, ||, !

// && = 그리고 = and 

// var x = 1>0 && 1<2;
// console.log(x); // true

// || --> 또는
// var x = 1>0 || 1<-1
// console.log(x); // true

// ! (부정 not)

// console.log(!true); // false
// console.log(!false); // true
// console.log(!(1>0)); // false

// var x = 1 > 0;
// console.log(!x); // false

// ## 타입 연산자 (Type Operator)
// 종류 : typeof, instanceof
// value의 타입을 return 한다.

// console.log(typeof 0); // number
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// # 조건문 (Condition)
// if / else / elseif
// switch

// if / else/ elseif

// if 단독으로 쓰일 때
// if (1 > 0) {
//     console.log("foo")
// }

// if (1 > 2) { // false 일 경우 실행되지 않음
//     console.log("foo")
// }

// if (1 > 0) {
//     console.log ("foo")
// } else {
//     console.log("bar")
// }

// if (1>0) { // 조건이 참인 경우 
//     console.log("foo")
// } else if (1>2) {
//     console.log("bar")
// } else { // 참이 없을 경우
//     console.log("baz")
// }

// 조건 부분에 booleanㅇ 아닌 데이터 타입이 올 경우 

// console.log(1>0) // 비교연산자는 boolean을 return한다.

// if (true) {
//     console.log("foo");
// }

// if ("") { // 조건에서 빈문자를 false로 취급한다.
//     console.log("foo")
// }

// if ("Hello") { // 빈문자가 아닌 경우 true로 취급힌다.
//     console.log("foo")
// }

// if (null) { // false
//     console.log("foo");
// }

// if (undefined) {
//     console.log("foo");
// }

// var x ;

// if (x) { // undefined 은 false로 취급한다.
//     console.log("foo");
// }

// if (0) { // false 보통의 언어에서 0은 false 1은 true를 나타냄.
//     console.log("foo");
// }

// if (-2) {
//     console.log("bar")
// }

// if (1) { // true.
//     console.log("baz")
// }

// ### switch
// switch 의 비교는 엄격비교임.

// var result;

// 엄격비교 (value와 type을 모두 비교)
// ===
// !==

// switch(3) { //switch 3 인자. 부분.
//     case 1:
//         result = "foo";
//         break;
//     case 2:
//         result = "bar";
//         break;
//     case 3: 
//         result = "baz";
//         break;
//     case 4:
//         result = "null";
// }

// console.log(result);

// * 반복문 (LOOP)
// FOR
// while

// FOR 반복문

// var sum = 0;

// // 1에서 10까지 더하기
// for (var i=0; i<=10; i++) {
//     sum += i
// }

// console.log(sum);

// for 문에서 break와 continue 키워드

// for (var i=0; i<=10; i++) {
//     if(i===7) {
//         break;
//     }
//     console.log(i);
// }

// for (var i=1; i<=10; i++) {
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
// }

// while

// var sum = 0;

// var i = 1;
// while(i <= 10) {
//     sum += 1;
//     i++;
// }

// console.log(sum);

// Q. 1부터 10까지의 숫자 중 짝수만 출력.

// for (var i=2; i<=10; i++) {
//     ;if(i<=0) {
//         continue;
//     }
//     console.log(i++);
// }

// for (var i=2; i<=10; i+=2) {
//     console.log(i);
// }

// for (let i=2; i<=10; i+=2) {
//     console.log(i);
// }

// "use strict"

// for (var i=2; i<=10; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// ## 함수 (FUNCTION)
// 호출 될 때만 실행되는 한 블록의 코드

// 함수를 선언하는 방식
// 1. 함수선언식
// 2. 함수표현식
// 3. 화살표함수

// 함수선언식
// function f() { //function 함수이름() {block}
//     //함수 정의 (function definition)
//     console.log ("foo")
// }

// // 호출
// f()

// 함수표현식
// 변수에 익명함수를 할당한다.
// var f = function () {
//     console.log("foo");
// }

// //호출
// f()

// 화살표함수
// 함수표현식의 변형, 간단한 문법
// var f = () => {
//     console.log("foo");
// }

// 호출
// f()

// Hostiong (게양)
// 함수선언식에서만 적용된다.

// 함수호출.
// f();

// 함수 선언
// 함수의 선언이 호출 시점보다 위로 올라간다.
// function f() {
//     console.log("foo")
// }

// console.log(f) //undefined
// f();

// Hosting이 되지 않는다.
// var f = () => {
//     console.log("foo")
// }

// // 함수에서의 return

// function f () {
//     console.log("foo"); 
//     return;
//     //return 아래의 코드는 실행되지 않는다.
//     console.log("bar");
// }

// f();

// function f() {
//     return console.log("foo");
//     console.log("bar");
// }

// f();

// 함수의 인자 (parameter, argument)

// function f(data) {
//     console.log("argument:"+ data);
// }

// f("foo"); //"foo" - arugument

// function f(a, b) {
//     return a + b;
// }

// console.log(f(1,2));

// Q. 사칙연산 함수를 만들어 보세요.
// 함수이름은 add(+), substract(-), multiply(*), divide(/)
// 함수의 return값을 변수에 담아 출력해보세요.

// function add(a, b) {
//     return a + b;
// }

// function substract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// var a = add(1, 2);
// var b = substract(1, 2);
// var c = multiply(1, 2);
// var d = divide(1, 2);

// console.log(a, b, c, d);

// ## callback
// 다른 함수의 인자가 되는 함수

// function f1(callback) {
//     var r = callback() //f1 함수의 내부에서 실행된다
//     console.log(r)
// }

// function f2() {
//     return "foo"
// }

// // f1(f2()) 잘못된 방법

// f1(f2); // f2는 f1의 callback이다

// function f1(callback) {
//     var r = callback(); //f1 함수 내부에서 실행된다.
//     console.log(r);
// } // 잘못된 방법 예시

// f1 (function() { //익명함수가 callback일 때
//     return "foo";
// }) // 잘못된 방법 예시

// function f1(callback) {
//     var r = callback();
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// f1(function() { // 익명함수가 callback이다.
//     return f2()
// })

// function f1(cd) {
//     let r = cd()
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// // f1(f2());

// f2(f2);

// function f(callback) {
//     // f함수 내부에서 callback함수를 실행 
//     let r = callback()
//     console.log(r);
// }

// //callback이 익명함수 일때
// f(function (){
//     return "foo"
// })

// callback에 인자가 있을 때
// function f1(callback) {
//     let r = callback()
//     console.log(r)
// }

// function f2(a, b){
//     return a + b;
// }

// // f1(f2(1, 2));
// f1(funcion() {
//     return f2(1, 2)
// }) 

// function f1(callback) {
//     var r = callback(1, 2);
//     console.log(r);
// }

// function f2(a, b){
//     return a + b;
// }

// f1(function (x, y) {
//     return f2(x, y);
// })

// # 변수의 종류
// var, let, const

// var
//변수를 선언하고 값(value)을 정의한다.ㅏ
// var foo = "bar"
// console.log(foo);

// var foo; //선언
// foo = "bar"; // 정의

// console.log(foo);

// var foo; //선언
// foo = "bar"; // 정의
// foo = "baz"; // 다시정의 

// console.log(foo);

// var foo = "bar" // 선언, 정의
// var foo = "baz" // 재선언, 재정의

// console.log(foo);

// let
// let foo = "bar" // 초기화
// console.log(foo);

// let foo; // 선언
// foo = "bar"; // 정의

// console.log(foo);

// let foo; // 선언
// foo = "bar"; // 정의
// foo = "baz" // 다시 정의

// console.log(foo);

// let foo = "bar" // 선언
// let foo = "baz" // 재선언 불가

// console.log(foo);

// const (constan, 상수)

// const foo = "bar"; // 선언 및 정의 (초기화)
// console.log(foo);

// // const foo; // 선언
// foo = "bar"; // 정의 따로 불가

// console.log(foo);
// const는 항상 선언과 정의를 함께 (초기화 필수.)

// const foo = "bar";
// // const foo = "baz"; // 재선언 불가

// console.log(foo);

// # 변수의 범위 (scope)
// 전역 범위 : 함수나 블록 밖에서 선언된 변수의 범위
// 블록 범위 : 블록 안에서 선언된 변수의 범위
// 함수 (지역)범위 : 함수 안에서 선언된 변수의 범위

// 전역범위 (global scope)
// const foo = "bar";

// f();
// function f(){
//     // 함수 내부에서 전역변수에 접근 가능
//     console.log(foo);
// }

// {   //block (조건문, 반복문)
//     // 블록 내부에서 전역변수에 접근가능
//     console.log(foo);
// }

// // 함수, 블록이 아닌 범위에서 전역변수에 접근 가능
// console.log(foo);

// 함수 (지역) 범위

// f()
// function f() {
//     // 함수(지역) 범위를 갖는 변수
//     let foo = "bar";
    
//     // 함수 내부에서 접근 가능
//     console.log(foo);
// }

// // 함수 외부에서 지역변수에 접근 불가
// console.log(foo); // foo is not defined.

// 블록 범위 (block)
// {
//     var foo = "foo";
//     let bar = "bar";
//     const baz = "baz";
// }

// console.log(foo); //ok
// console.log(bar); // error
// console.log(baz); // error

// 함수의 범위
// 전역 범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
// 블록 범위 : 블록 안에서 선언된 함수의 범위
// 함수 (지역) 범위 : 함수 안에서 선언된 함수의 범위

// function f() {}

// // 블록 또는 함수 외부에서 접근
// console.log(f);

// // 블록 내부에서 접근 
// { console.log(f); }

// // 함수 내부에서 접근
// x()
// function x() {
//     console.log(f)
// }

// f()
// function f1() {
//     //지역범위 갖는 함수
//     function f2() {}
//     console.log(f2);
// }

// // console.log(f2); // error

// {
//     function f() {}
// }

// console.log(f); // ok

// Q. 콤솔에 현재시간을 알려주는 시계를 만들어보세요.
// setInterval(callback, ms)
// ms 간격으로 callback 실행
// 1s = 1000ms
// console.log(new Date(). toLocaleTimeString());

// setInterval(function(){
//     let time = new Date(). toLocaleTimeString();
//     console.log(time);
// }, 1000)

// ## Array (배열)
// 한 개 이상의 값을 가진 상태

// let arr = [10, 20, 30];

// console.log(arr);
// // 배열의 0번째 (index) value에 접근
// console.log(arr[0]) //10
// console.log(arr[1]) //20
// console.log(arr[2]) //30
// console.log(arr.length) // 배열의 value의 갯수 = 3

// let arr = ["foo", 20, "baz"];

// console.log(arr);

// // update
// arr[1] = "bar" 
// console.log(arr);

// //add
// arr[3] = 40;
// console.log(arr);

//반복문으로 Array 순회하기

// let arr = ["foo", "bar", "baz"];

// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// let arr = [];

// for (let i=0; i<10; i++) {
//     arr[i] = i+1;
// }

// console.log(arr);

// # Object (객체)
// 관련된 데이터와 함수의 집합

// const cat = {
//     // Key(property, 속성 : value )
//     name: "Kitty",
//     age: 2,
//     home: null,
//     //value 가 함수인 것을 메서드 (method) 라고 부른다.
//     sound: function() {
//         return "meow";
//     }
// }

// // 객체에 접근
// console.log(cat);
// // cat의 name 속성에 접근 
// console.log(cat.name);
// // cat의 age 속성에 접근
// console.log(cat.age);
// // cat의 존재하지 않는 속성
// console.log(cat.color); //undefined
// // used string - cat: home속성에 접근
// console.log(cat["home"]); //null
// //cat의 sound method에 접근
// console.log(cat.sound());

// Update Object 객체 업데이트 하기

// const cat = {
//     name: "Kitty",
//     age: 2,
//     home: null,
//     sound: function(){
//         return "meow";
//     }
// }

// // cat : home object changed 속성값 변경
// cat.home = "Mapo-gu";
// console.log(cat);

// // cat : age object delete 속성값 삭제
// delete cat.age;
// console.log(cat);

// // add odject colour at cat. 세로운 속성 컬러추가
// cat.color = "Mixed"
// console.log(cat)

//Q. 숫자를 대입하면 4칙연산의 결과값을 returng하는 함수를 만들어 보세요.

// function calc(a, b) {}

// function calc(a, b) {
//     return {
//         add: a + b,
//         substact: a - b,
//         multiply: a * b,
//         divide: a / b
//     }
// }

// let r = calc(1,2);
// console.log(r)

// # 에러와 에러처리 

//app crashed
// f()

// try catch 구문을 이용한 에러 처리

// try {
//     // 코드를 작성한다
//     f();
// } catch (err) {
//     // 에러가 발생할 경우 catch 블록에서 처리한다.
//     console.error(err)
// } // ReferenceError : f is not defined

// try {
//     //SyntaxError(문법에러)는 compile 에러를 발생시킨다.
//     // compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     // try catch에서 compile 에러는 처리 할 수 없다. 
//     f();
// } catch (err) {
//     console.error(err)
// } // ReferenceError : f is not defined

// error 객체의 종류
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// error 객체의 속성 (property)
// name
// message
// stack

// try {
//     f();
// } catch (err) {
//     console.error("name", err.name); // ReferenceError
//     // console.error("message", err.message); // f is not defined
//     // console.error("stack", err.stack); // stack ReferenceError : f is not defined
// }

// # RangeError

// try {
//     const pi = Math.PI;

//     console.log(pi) // 3.141592653589793

//     console.log(pi.toPrecision(200))

// } catch (err) {
//     console.error(err) //RangeError: toPrecision() argument must be between 1 and 100
//                        //at Number.toPrecision (<anonymous>)
// }

// ReferenceError

// try {
//     // ReferenceError
//     // 존재하지 않는 변수를 참조(refer)했을 때 발생한다.
//     console.log(x);
// } catch (err) {
//     console.error(err)
// } // ReferenceError: x is not defined

// SyntaxError
// try {
//     // SyntaxError (문법에러)
//     // SyntaxError는 컴파일 에러를 발생시킨다. 
//     console.log(2022)) // ) this in is make the error
// } catch (err) {
//     console.error(err)
// } // Uncaught SyntaxError : Unexpected token ')'

// TypeError
// try {
//     // TypeError (타입 에러)
//     // 값이 예상된 타입이 아닐 때 발생한다. 

//     // setInterval(callback, ms)
//     // TypeError : callback은 함수여야 한다. null을 전달받았다. 
//     setInterval(null, 1000)
// } catch (err) {
//     console.error(err)
// } 
 
// URIError
// try {
//     // URIError : URI malformedd (URI가 잘못 형성되었다. )
//     decodeURI{"%"};
// } catch (err) {
//     console.error(err)
// }

// 커스텀 에러 객체 (Object)로 커스텀 에러 발생시키기

// try {
//     const foo = "baz"

//     if (foo !== "bar") {
//         const err = {
//             name: "CustonError",
//             message: "bar만 가능합니다."
//         }

//         throw err;
//     }

// } catch (err) {
//     console.error(err) 
// }

// try catch finally 

// try {
//     console.log("foo")
// } catch (err) {
//     console.error(err) 
// } finally {
//     // 에러 발생 유무와 상관없이 항상 실행한다.
//     console.log(".")
// }

// Q. 15 years old girl wants to buy a bottle of soju at CU,
// use customerror to stop the girl cuz alcohol can allow to buy over 18. 

// try {
//     const age = 15;

//     console.log("the girl who 15 years old is going to CU for buy a bottle of soju.")

//     if (age < 18) {
//         const err = {
//             name: "age error",
//             message: "come back when you truned 18."
//         }

//         throw err;
//     }

//     console.log("YAy I bought a soju!")

// } catch (err) {
//     console.error(err)
// }

// app crashed
// throw "Error!"

// # class
// 객체 생성을 위한 템플릿

// class Cat {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const cat1 = new Cat("Kitty", 2);
// const cat2 = new Cat("Alfredo", 3);

// console.log(cat1)
// console.log(cat2)

// console.log (cat1 instanceof Cat)
// console.log (cat2 instanceof Cat)

// # class의 속성과 메서드

// class MapoguCat {
//     constructor(name) {
//         this.name = name;
//     }

//     home = "Mapo-gu";

//     sound() {
//         return "meow"
//     }
// }

// const cat = new MapoguCat("Kitty")

// console.log(cat);
// console.log(cat.home);
// console.log(cat.sound);

// Q. Make the templit for white color of Maltese lived in Samsandong.

// class SamsandongMaltese {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     home = "Samsan-dong"
//     color = "white"

//     sound() {
//         return "Bark bark"
//     }
// }

// const maltese = new SamsandongMaltese ("Snow", 2);

// console.log(maltese);
// console.log(maltese.sound());

// Make the templit for cat lived at pyeonglidan-road 

// class Cat {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     home = "pyeonglidan-road"
    
//     sound() {
//         return "meow meow"
//     }
// }

// const cat = new Cat ("Kitty", 3);

// console.log(cat)
// console.log(cat.sound()) 


//#

// class Cat {
//     constructor (name) {
//         this.name = name
//     }

//     sound(x) {
//         return x;
//     }
// }

// const cat = new Cat("Kitty");
// console.log(cat);
// console.log(cat.sound("meow meow"));



// # 클라스의 static 속성과 static 메서드
// 클래스 자체의 속성과 메서드이다.
// 인스턴스는 호출 할 수 없다.
// 클래스와 관련된 인스턴스 등에 유틸리티를 제공하는 역할을 한다.

// class Cat {
//     constructor(name, months) {
//         this.name = name
//         this.months = months
//     }

//     static description = "Kitten will be a cat after 18months born."

//     static isAdult(months) {
//         if(months <18) {
//             return "Kitten";
//         } else {
//             return "Cat";
//         }
//     }
// }

// const cat = new Cat("Kitty", 12);
// console.log(cat);

//  Cat 의 인스턴스에서 static 속성과 static 메서드를 호출 할 수 없다.
// console.log(cat.description); // undefined
// console.log(cat.isAdult()); // Uncaught TypeError: cat.isAdult is not a function

// Cat 클래스가 자체적으로 호출한다.
// Cat 클래스 또는 Cat 클래스의 인스턴스 등에 유틸리티를 제공한다.
// console.log(Cat.description);
// console.log(Cat.isAdult(cat.months))

// # make only with static method 
// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }
//     static subtract(a, b) {
//         return a - b;
//     }
//     static multiply(a, b) {
//         return a * b;
//     }
//     static divide(a, b) {
//         return a / b
//     }
// }

// console.log(Calculator.add(1, 2))
// console.log(Calculator.subtract(1, 2))
// console.log(Calculator.multiply(1, 2))
// console.log(Calculator.divide(1, 2 ))

// # JavaScript의 미리 정해진 클래스 (빌트인 클래스)
// 종류
// 문자 처리: String
// 숫자 및 날짜: Number, Math, Date
// Indexed collections: Array 
// 에러 : Error, SyntaxError, ReferenceError, TypeError,... 
// 기타 :  Promise, JSON

// 빌트인 클래스의 인스턴스 만들기 
// 부제 : JavaScript에서 모든 데이터는 Object이다.

// const foo = new String("bar");
// console.log(foo)
// console.log(typeof foo)

//  String 클래스의 인스턴스를 literal 표기법을 이용해 생성한다
// foo변수는 메서드와 속성을 String으로 부터 상속받았다.

// literal way (클래스를 호출하지 않고 값을 정의한다.)
// const foo = "bar" 
// console.log(foo);
// console.log(typeof foo);

// console.log("foo".toUpperCase());

// const num = new Number(2);
// console.log(num)
// console.log(typeof num)

// const num = 2;
// console.log(num)
// console.log(typeof num)

// const date = new Date();
// console.log(date)

// const bool = new Boolean(true);
// // const bool = true;
// console.log(bool)

// const arr = new Array("foo", "bar", "baz")
// // const arr = ["foo", "bar", "baz"] // literal 
// console.log(arr);

// const o = new Object({foo: "bar"})
// const o = {foo: "bar"} // literal

// console.log(o)

// Math의 static 속성 'PI'
// const pi = Math.PI;
// console.log(pi) //3.141592653589793

// Error 클래스는 다양한 종류의 Error의 인스턴스 생성에 사용된다.
// const err = new Error("Something's broken!");
// console.log(err)
// console.log(err.name) // Error
// console.log(err.message) // Something is broken!

// 빌트인 클래스의 인스턴스로 커스텀 에러 발생시키기

// 사용자가 정의한 함수 f
// function f(data) {
//     if(typeof data !== "strong") {

//         throw new TypeError("인자는 문자여야만 합니다.")
//     }

//     console.log("인자:", data);
// }

// try {
//     f(2);
// } catch (err) {
//     console.error(err)
// }

// Q. Use RangeError instance, 15 years old girl wants to buy a bottle of soju at CU,
// use customerror to stop the girl cuz alcohol can allow to buy over 18. 

// try {
//     const age = 15;

//     console.log("the girl who 15 years old is going to CU for buy a bottle of soju.");

//     if (age < 18) {
        
//         const err = new RangeError("You can coma back to buy some alcohol after 3yrs.");

//         throw err;
//     }

//     console.log("she bought some alcohol..");

// } catch (err) {
//     console.log(err);
// }

// # 빌트인 클래스의 인스턴스들의 속성과 메서드 사용하기

// Strong

// const foo = "bar";

// console.log(foo.length);
// console.log(foo.toUpperCase())
// console.log(foo.split("a"))
// console.log(foo.replace("r","z"))

// Number
// const year = 2022;
// console.log(year,toString())
// console.log(year.toString(2))
// console.log(year.toPrecision(10));
// console.log(Number.isNaN(year))

// Math 
// console.log(Math.random()); // 0 ~1 사이의 소수를 return
// console.log(Math.PI); // PI
// console.log(Math.round(0.5)); // 반올림
// console.log(Math.ceil(0.5)) //올림
// console.log(Math.floor(0.5)) // 내림
// console.log(Math.pow(2,7)) //거듭제곱
// console.log(Math.sqrt(16)) //제곱근 (square root)
// console.log(Math.max(10,100)) // 최대값
// console.log(Math.min(10,100)) // 최소값

// Date
// const date = new Date() 
// console.log(date); // GMT시간 (그리니티 평균시)
// console.log(date.toLocaleString()); // 현지시간 날짜와 함꼐 (문자열로 출력)
// console.log(date.toLocaleTimeString()); // 현지 시간만 출력

// Array
// const arr = ["foo", "bar"];
// console.log(arr);

// arr.push("baz") // 새로운 아이템을 마지막에 추가한다. 
// console.log(arr);

// 연습
// const arr = ["hey", "hi"];
// console.log(arr);

// arr.push("Hello".toUpperCase());
// console.log(arr);

//*
// const arr = ["foo", "bar", "baz"];
// console.log(arr);

// arr.pop() // array이 마지막 item을 제거한다

// console.log(arr);

//*
// const arr = ["foo", "bar", "baz"];
// const r = arr.slice(1, 2); 
// slice(start, end), 시작과 끝을 생략이 가능하다.
// slice에서는 새로운 Array를 return한다.
// console.log(r) 

//*
// const arr = ["foo", "bar", "baz"];
// const r = arr.slice(1);
// console.log(r)

//*
// const arr = ["foo", "bar", "baz"];
// const r = arr.sort(); // 기본형으로 사용 할 때는 문자열 Array에만 정상적으로 작동한다.
// console.log(r) // sort 알파벳 순서로 정렬된다. 

//* need to check this ; dont understand
// const arr = [100, 25];
// const r = arr.sort(); // 100과 25를 문자열로 변환한뒤 비교하여 정렬한다. 
// console.log(r)


//*
// const arr = [20, 10, 30];

// const r = arr.sort (function (a, b) {
//     return a - b;
// })

// console.log(r)

//*
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const arr3 = arr1.concat(arr2); // arr1.concat(arr2) arr1 뒤에 arr2d을 연결한다. 

// console.log(arr3);


// Q. slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어보세요.

// const arr = ["a","b","c","d","e","f","g"];

// const r = arr.slice(1, 6);

// console.log(r)

// # map()
// const arr = ["foo", "bar", "baz"];

// // map (callcack)
// // callback에 배열의 value, index, array를 인자로 전달한다.
// // Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다. 
// // 새로운 Array를 return한다. 
// const r = arr.map(function (value, index, array) {
//     return value.toUpperCase();
// })

// console.log(r);

//*
// const arr = [1, 2, 3, 4];

// const r = arr.map(function (value, index, array) {
//     return value * 10;
// })

// console.log(r);

// #filter();

// const arr = ["foo", "bar", "baz"];

// // Array 를 순회하며 특정한 조건에 맞는 value로 구성된 새로운 Array를 return 한다.
// const r = arr.filter(function (value, index, array) {
//     if (value.charAt(0) === "b") {
//         return value;
//     }
// })

// console.log(r); // ['bar', 'baz'];

// # Object

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// const r = Object.keys(o); // Object의 key로 이루어진 Array를 return한다.

// console.log(r) //['prop:1', 'prop:2', 'prop:3']

//*
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// const r = Object.entries(o);

// console.log(r)

// const arr = [1, 2, 3, 4, 5];

// const r = arr.filter(function (value, index, array) {
//     if (value > 2) {
//         return value;
//     }
// })

// console.log(r)

// Q. 1 origin으로만 구성된 String Array를 만들어보세요
// 2 유럽 맥주로만 구성된 Array를 만들어보세요

// const beers = [
//     { name: "Heineken", origin: "Netherlands"},
//     { name: "Kloud", origin: "S.Korea"},
//     { name: "Guinness", origin: "Ireland"},
//     { name: "Asahi", origin: "Japan"}
// ]

// beers.map (function (value, index, arry) {
//     console.log(value.origin);
// })

// // map, filter

// //*
// const origins = beers.map(function (beer) {
//     return beer.origin;
// })

// console.log("World beer from", origins)

// const europeanBeers = beers.filter(function (beer) {
//     if (beer.origin === "Netherlands" || beer.origin === "Ireland") {
//         return beer;
//     }
// })

// console.log("Premium beers", europeanBeers)

// ### Destructing assignment (구조분해 할당)
// Array: Array의 iteme들을 개별적으로 변수에 담을 수 있게 한다. 
// Object: Object의 속성들을 개별적으로 변수에 담을 수 있게 한다.

// Array
// const arr = ["foo", "bar", "baz"];

// 기존의 방법 인덱스 사용 array itemㅇ 접근
// Array의 item들을 개별적으로 변수에 담았다.
// const item0 = arr[0];
// const item1 = arr[1];
// const item2 = arr[2];

// console.log(item0)
// console.log(item1)
// console.log(item2)

//* 
// const arr = ["foo", "bar", "baz"];

// // 단순해진 문법
// const [item0, item1, item2] = arr;

// console.log(item0)
// console.log(item1)
// console.log(item2)

//*
// function calculator(x, y) {
//     return [x+y, x-y, x*y, x/y]
// }

// const [add, substract, multiply, divide] = calculator(1, 2);

// console.log("add", add)
// console.log("substract", substract)
// console.log("multiply", multiply)
// console.log("divide", divide)

//*
// const beers = [
//     { name: "Heineken", origin: "Netherlands"},
//     { name: "Kloud", origin: "S.Korea"},
//     { name: "Guinness", origin: "Ireland"},
//     { name: "Asahi", origin: "Japan"}
// ]

// const [DutchBeer, KoreanBeer, IrishBeer, JapaneseBeer] = beers;

// console.log(IrishBeer)

// ### Object
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// const prop1 = o.prop1;
// const prop2 = o.prop2;
// const prop3 = o.prop3;

// console.log(prop1)
// console.log(prop2)
// console.log(prop3)

//*
// const o = {prop1: "foo", prop2: "bar", prop3: "baz" }

// const {prop1, prop2, prop3} = o;

// console.log(prop1)
// console.log(prop2)
// console.log(prop3)

//*

// 함수에서 Destructing 사용하기

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// f(o);
// function f(props) {
//     const prop1 = props.prop1;
//     const prop2 = props.prop2;
//     const prop3 = props.prop3;
    
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// f(o); 
// function f ({prop1, prop2, prop3}){
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// Q. 다음과 같이 문장을 출력하는 함수를 정의해보세요.
// (구조분해할당을 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland
// const IrishBeer = { name: "Guinness", origin: "Ireland"};

// console.log(IrishBeer.name, "is originated in the brewery at", IrishBeer.origin)

// f(IrishBeer)
// function f ({name, origin}) {
//     console.log(name + " is originated in the berwery at " + origin);
// }

// Array
// push()

//*
// const arr = ["foo", "bar"];
// const r = [...arr, "baz"];
// console.log(r)

//* concat(): concatenation(연결)
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];

// const r = [...arr1, ...arr2];

// console.log(r)

//*
// const arr = ["foo", "bar", "baz"];

// const [item0, ...rest] = arr;
// console.log(item0) 
// console.log(rest)
// console.log(arr)

// Q. Spread 문법을 사용하여 일본 맥주를 추가해보세요.
// const beers = [
//     { name: "Heineken", origin: "Netherlands"},
//     { name: "Kloud", origin: "S.Korea"},
//     { name: "Guinness", origin: "Ireland"}
// ]

// const japaneseBeer = { name: "Asahi", origin: "Japan"};

// console.log(...beers, japaneseBeer)

// const r = [...beers, japaneseBeer]
// console.log(r)

// * Object 속성 업데이트 

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};
// const r = {...o, prop2: null}

// console.log(r)

// 속성 추가
// const o = {prop1: "foo", prop2: "baz"};
// const r = {...o, prop3: "baz"};

// console.log(r);

// Q. dutchBeeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성
// available: true를 추가해보세요.
// (Object의 Spread 문법 사용)
//*
// const dutchBeer = {name: "Heineken", origin: "Netherlands"}

// console.log ({...dutchBeer, available: true});

//*
// const dutchBeer = {name: "Heineken", origin: "Netherlands"}
// const available = {...dutchBeer, available: true};

// console.log(available)

//Q. thr Guinness beer is available right now.
// Change the available of Guinness beer to true
// for use by map mathod and Spread
// (map() method & use Spread) 
const beers = [
    {name: "Heineken", origin: "Netherlands", available: true},
    {name: "Kloud", origin: "S.Korea", available:true},
    {name: "Guinness", origin: "Ireland", available: false}
]

//*
// const r = beers.map (function (beer) {
//     return {...beer, available:true}
// })

// console.log(r)

// map(callback) callback 내에서도 if/false 사용가능

// beers.map(beer => {
//     console.log(beer);
// })

// //*
// const r = beers.map(beer => {
//     return {...beer, available: true}
// })

// console.log(r)

//*
// const r = beers.map(beer => {
//     if (beer.name === "Guinness") {
//         return {...beer, available: true}
//     }
//     return beer;
// })

// console.log(r)

//*
// const r = beers.map(beer => {
//     beer.available = true
//     return beer;
// })
// console.log(r)

// ## Java Script Asynchronous programing 비동기
// 작업 과정에서 blocking을 다루기 위한 방법이다.
// 예) 서버로부터 데이터를 요청하는 것과 그 처리

// function f(callback) {
    // callback()
// }

// f 함수는 동기 (Asynchronous)함수이다
// 호출된 순서대로 실행한다. 

// f(()) => {
//  console.log("foo")   
// })
// console.log("bar")

// setTimeout(callback, ms) : ms 후에 callback 실행
// 대표적인 비동기 함수 setTimeout
// setTimeout(() => {
//     console.log("foo");
// }, 1000)

//setTimeout : 대표적인 비동기 함수이다.
// 비동기 함수는 가장 마지막에 실행된다. // foo
// setTimeout(()=> {
//     console.log("foo");
// }, 1000)
// console.log("bar");

// real world 예제 
// 서버에게 데이터 요청하기  
// function fetchData(callback) {
//     const o = {foo: "bar"};

//     setTimeout(() => {
//         callback(o)
//     }, 1000)
// }

// fetchData (data => {
//     console.log("data", data)
// })

// console.log("다른 작업")

// 비동기에서 에러 다루기
// 서버에 데이터 요청하는 예제

function fetchData(id, callback) {
    if (!id) { //!null = true, !undefined = true, !"" = true
        const err = new Error ("id is required");

        setTimeout(() => {
            callback(err, null)
        }, 0)
        return;
    }

    const o = {foo: "bar"};

    setTimeout(() => {
        callback(null, o)
    })
}

fetchData("", (err, data) => {
    if (err) {
        throw err;
    }
    console.log("data", data)
})

