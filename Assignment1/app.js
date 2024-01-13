//Reverse a string without using builtin method
let string='Hello World!';
console.log('Input String',string);
var reverse="";
for (let i = string.length-1; i >= 0; i--) { 
    reverse += string[i];

}
console.log('1)reverse:',reverse);

//Count number of vowles in a given string
var vowels=0;
var arr_vowels=['a','e','i','o','u'];
for (let index = 0; index < string.length; index++) {
    if(arr_vowels.includes(string[index])){
        vowels++;    
    }
}
console.log('2)vowels',vowels);

//Convert the Each Letter in a sentence to upper case
var sentence= "fox jumps over the long barrier ";
var uppercase=sentence.split(" ").map((text)=>{ return text.charAt(0).toUpperCase()+text.slice(1)}).join(" ");

console.log('3)Upper Case:',uppercase);


//how to check if sting is palindrome
var palindrome="feef";
var notpalindrome="Redink";

function isPalindrome(str){
    var reverseString = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase().split("").reverse().join("");
    return str === reverseString;
}

console.log("4)Is Palindrome:",isPalindrome(palindrome));
