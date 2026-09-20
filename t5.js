function t5(arr) {
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
 
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
 
    const temp = arr[maxIndex];
    arr[maxIndex] = arr[minIndex];
    arr[minIndex] = temp;
 
    return arr;
}
 
const arr5 = [1, 2, 3, 4, 5];
console.log("Масив до", [...arr5]);
t5(arr5);
console.log("Масив після (max and min поміняні):", arr5);
console.log("---");