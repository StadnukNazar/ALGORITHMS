const arr = [5, 2, 9, 2, 1, 9, 7, 9, 1];
console.log(arr);
 
function t7() {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
 
    const result = [];
    let maxAdded = false;
    let minAdded = false;
 
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value === max) {
            if (!maxAdded) { result.push(value); maxAdded = true; }
        } else if (value === min) {
            if (!minAdded) { result.push(value); minAdded = true; }
        } else {
            result.push(value);
        }
    }
 
    console.log(result);
    return result;
}
 
t7();