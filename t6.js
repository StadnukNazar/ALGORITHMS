function t6(arr) {
    const positive = [];
    const negative = [];
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negative.push(arr[i]);
        }
    }
 
    return { positive: positive, negative: negative };
}
 
const arr6 = [5, -3, 0, 8, -1, -9, 2, 12, -3, 54, -2, -4];
console.log("Масив для завдання :", arr6);
const result6 = t6(arr6);
console.log("додатні:", result6.positive, " від'ємні:", result6.negative);
console.log("---");
 