const arr = [4, 7, 2, 9, 10, 3, 6];
console.log(arr);
 
function t1() {
    const indexMin = 0;
    const indexMax = arr.length - 1;
 
    let count = 0;
    let sum = 0;
    for (let i = indexMin; i <= indexMax; i++) {
        if (arr[i] % 2 == 0) {
            count++;
            sum += arr[i];
        }
    }
 
    console.log(count);
    console.log(sum);
    console.log(" кількість парних = " + count + ", сума парних = " + sum);
    return { count, sum };

}
 
t1();