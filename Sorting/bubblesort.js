/*
 *  Copyright Subhro Chatterjee
*/

// Iterative Approach 
let bubbleSort = (unsortItems) => {
    for(let i=0; i< unsortItems.length-1; i++){
        for(let j=0;j<unsortItems.length-i-1; j++){
            if(unsortItems[j] > unsortItems[j+1]){
                let temp = unsortItems[j];
                unsortItems[j] = unsortItems[j+1];
                unsortItems[j+1] = temp;
            }
        }
    }
    return unsortItems;
}
console.log(bubbleSort(new Array(69,30,21,15,23,10,88)));

// Recursive Approach 
let recursiveBubbleSort = (unsortedArray, size) => {
    let count = 0;
    if(size== 1) return ;

    for(let index = 0; index < size-1; index++){
        if(unsortedArray[index] > unsortedArray[index+1]){
            let temp = unsortedArray[index];
            unsortedArray[index] = unsortedArray[index+1];
            unsortedArray[index+1] = temp;
            count++;
        }
    }
    recursiveBubbleSort(unsortedArray, size-1);
    return unsortedArray;
}

console.log(recursiveBubbleSort(new Array(64,34,25,12,22,11,90), 7));


