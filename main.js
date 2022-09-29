
//xify
/*
function name: xify
parameters: string -> str

return: string

*/
function xify(str) {
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;
}
console.log(xify("hello"));
console.log(xify("hi there"));


//yellingChars
/*
function: yellingCars
parameters: 1 string str
return: newStr

let newStr = ""
for loop
add: !

*/



function yellingChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++) {
        newStr += str[i];//add back char from str
        newStr += "!";//add ! after it
        
        //another shorter way to write above
        // newStr += str[i] + "!";   
    }
    return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

//indexChars
function indexChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++) {
        newStr += i;//indexOf not needed, we can use i which is the existing for counter
        newStr += str[i];//add back char from str
        
        //another shorter way to write above
        // newStr += str[i] + "!";   
    }
    return newStr;
}
console.log(indexChars("hello"));
console.log(indexChars("bye"));

//exclaim
/*
str
for(let i= 0;....)
newStr += str[i]

if(str[i] === "?"" || str[i] === "."){
    newStr += "!";
}
*/
function exclaim(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "?" || str[i] === "."){
            newStr += "!";
        } else {
            newStr += str[i];
        }
    }
    return newStr;

}
console.log(exclaim("What are you doing?"));
console.log(exclaim("This is fine."));

//truncate
function truncate(str) {
    let newStr = "";

    for(let i = 0; i < 15; i++) {
            newStr += str[i];
        
        } 
        newStr += "..."
        // return newStr + "...";
        return `${newStr}...`
 }
 console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
  
//ciEmailify
/*
change space to a period (.)
add @codeimmersives.com
change all chars to lowercase


*/
function ciEmailify(str) {
    let newStr = "";

    for(let i = 0; i < str.length; i++) {
            if (str[i] === " "){
                newStr += ".";
            } else {
                newStr += str[i];
            }
        
        } 
        //right now this is what we have:  firstname.lastname 
        // newStr += "@condeimmersives.com";
        // return newStr.toLowerCase();
 }
 console.log(ciEmailify("colin jaffe"));
 console.log(ciEmailify("Anthony DeRosa"));

 //reverse
function reverse(str) {
    let newStr = "";

    for(let i = str.length-1; i >= 0; i--) {
           newStr += str[i];
        } 
        //right now this is what we have:  firstname.lastname 
        
        return newStr;
 }
 console.log(reverse("mesaura"));

 //onlyVowels
 function onlyVowels(str) {
    let newStr = " ";
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u"){
        newStr += str[i];
    }
 
        
    }
    return newStr;
 }
 console.log(onlyVowels("Colin Jaffe"));