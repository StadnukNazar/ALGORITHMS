function t2(arr) {
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
 
    
    let countAbove = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            countAbove = countAbove + 1;
        }
    }
 
    console.log(" середнє = " + average + ", елементів більших за середнє = " + countAbove);
}
const arr = [4, 7, 3, 9, 10, 3, 6];
console.log(arr);
t2(arr, 0, arr.length - 1);