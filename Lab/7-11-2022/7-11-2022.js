let str="FullStack Developer contains MEAN Stack and MERN Stack.";
if(str.includes("FullStack"))
console.log("FullStack");
else console.log("No, It does not contains");

let vowel = "aeiouAEIOU";
console.log("Vowels Are : ")
for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i]))
        console.log(str[i]);
}

console.log("Consonants Are :")
for(let i=0;i<str.length;i++){
    if(!vowel.includes(str[i]))
        console.log(str[i]);
}

let pattern =/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;


function validate(){
    let cardNumber = document.getElementById('card').value;
    if(pattern.test(cardNumber))console.log("yes");
    else console.log("no");  
}

