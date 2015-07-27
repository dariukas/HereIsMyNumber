/*
	"Calculate my Phone Number"
	Author: Darius Miliauskas
	Date: 2015-07-14
        This tool converts the phone number to the mathematical expression.
*/

var result;
var telNumber=123456;

var a = Math.floor(Math.random()*Math.pow(10, 9));
var b = -Math.floor(Math.random()*Math.pow(10, 9));
var c = Math.floor(Math.random()*Math.pow(10, 9));
var d = a+b+c-telNumber;

add(run(a));
result+="-";
add(run(-b));
result+="+";
add(run(c));
if (d>0){
result+="-";
add(run(d));
}else{
result+="+";
add(run(-d));
}
console.log(result);

function add(array){
if(array[1]!=1){
result+=array[0]+"^"+array[1];
}else{
result+=array[0];
}

for(var i = 2; i < array.length; i+=2) {
if(array[i+1]!=1){
result+="*"+array[i]+"^"+array[i+1];
}else{
result+="*"+array[i];
}
}
}

function run(number){
var array = [];
var i=2, n;
while(number>1){
if(number % i == 0) {
n = divides (number, i);
array.push(i, n);
number=number/(Math.pow(i, n));
}
i+=1;
}
return array;
}

//find how many times it divides 
function divides(number, value) {
var n =0;
while (number % value ==0 ){
n++;
number=number/value;
}
return n;
}


//ADDITIONAL FUNCTIONS
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function isEven(number) {
var n =0;
while (number % 2 ==0 ){
n++;
number=number/2;
}
return n;
}
