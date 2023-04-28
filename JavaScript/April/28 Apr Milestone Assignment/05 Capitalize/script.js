let userName = "aarav";

// check the first letter is in uppercase or not, if not change it to uppercase and return the string

userName = (userName.charAt(0) == userName.charAt(0).toUpperCase()) ? userName : userName.charAt(0).toUpperCase() + userName.slice(1);

console.log(userName);