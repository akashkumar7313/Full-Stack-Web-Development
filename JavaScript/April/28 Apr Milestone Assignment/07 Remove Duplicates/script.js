// romove duplicates from an array done 


const removeDuplicates = function(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let key = arr[i];
        if(obj[key] == null){
            obj[key] = 1;
        } 
        else{
            obj[key]++;
        }
    }
    let ans = [];
    for(let key in obj){
        if(obj[key] > 1){
            obj[key] -= 1;
            ans.push(key);
        } 
        else{
            ans.push(key);
        }
    }
    return ans.join(",");
}

console.log(removeDuplicates([2,3,2,4,5,5,6]));
console.log(removeDuplicates(["jeans","apple","jeans","t-shirt","shoes"]));