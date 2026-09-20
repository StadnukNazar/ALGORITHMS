function t3(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }
    return result;
}
const a = [1, 4, 3, 4, 5];
const b = [10, 20, 30, 40, 50];

const sum = t3(a, b);
console.log(sum);