// Selection Sort
let selectionSort = (unsortedArray) => {
    let minIndex;
    for(let i=0; i< unsortedArray.length; i++){
        minIndex = i;       //Counter Increase
        for(let j= i+1; j< unsortedArray.length; j++){
            if(unsortedArray[j] < unsortedArray[minIndex]){
                minIndex = j;  // Copy Min Index
            }
        }
        //swapping
        let temp = unsortedArray[minIndex];
        unsortedArray[minIndex] = unsortedArray[i];
        unsortedArray[i] = temp;
    }
    return unsortedArray;
} 

console.log(selectionSort(new Array(3, 1, 5, 2, 7, 0)));
