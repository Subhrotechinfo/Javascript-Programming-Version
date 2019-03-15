/*
 *  Copyright Subhro Chatterjee
*/

//Remove Duplicates
// indexOf() --> return -1 if the value is not found in the array.

((unsortedArray) => {

    let uniqueArray = []; 
    for(let index = 0 ; index < unsortedArray.length; index++){
        if(uniqueArray.indexOf(unsortedArray[index]) == -1){
            uniqueArray.push(unsortedArray[index]);
        }
    }
    // return uniqueArray;
    console.log('Unique Elements',uniqueArray);
})(new Array(1,1,2,3,2,1));

//Set Object store unique values of any type[primitive values, object]

((unsortedArray) => {
    let uniqueArray = Array.from(new Set(unsortedArray))
    // return uniqueArray;
    console.log('Using Set- >',uniqueArray);
})(new Array(1,1,2,3,2,1));

// console.log(removeDuplicates(new Array(1,1,2,3,2,1)));
// console.log(removeDuplicateUsingSet(new Array(1,1,2,3,2,1)))
