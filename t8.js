const a = [3, 8, 12, 5, 9];
const b = [1, 6, 10, 4, 7];
console.log(a);
console.log(b);
 
function t8() {
    let sumA = 0;
    for (let i = 0; i < a.length; i++) sumA += a[i];
    const avgA = sumA / a.length;
 
    let sumB = 0;
    for (let i = 0; i < b.length; i++) sumB += b[i];
    const avgB = sumB / b.length;
 
    let low = avgA;
    let high = avgB;
    if (avgA > avgB) { low = avgB; high = avgA; }
 
    const result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= low && a[i] <= high) result.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= low && b[i] <= high) result.push(b[i]);
    }
 
    console.log(avgA);
    console.log(avgB);
    console.log(result);
    return result;
}
 
t8();