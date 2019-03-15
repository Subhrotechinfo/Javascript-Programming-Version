/*
 *  Copyright Subhro Chatterjee
*/

let insertionSort = (unsortedArray, size) => {
    let i, j,key;
    for(j=1; j < size; j++){
        key = unsortedArray[j];
        i = j-1;

        while(i>= 0 && key < unsortedArray[i]){
            unsortedArray[i+1] = unsortedArray[i];
            i = i- 1;
        }
        unsortedArray[i+1] = key;
    }
    return unsortedArray;
}

console.log(unsortedArray(new Array(9,6,5,0,8,2,7)));

