let user_name = "prAdeep";
let count = 0;
let vowel = "aeiou";
for(let i = 0; i < user_name.length; i++){
    if(vowel.includes(user_name[i].toLowerCase())){ // if there is a uppercase of vowel then it will convert into lowercase and will be counted. 
        count++;
    }
}
console.log(count);