function t4(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        result.push(b[i]);
    }
    return result;
}
 
const a4 = [17, 23, 35];
const b4 = [10, 20, 303, 44, 50];
const c4 = t4(a4, b4);
console.log("Масив A:", a4, " Масив B:", b4);
console.log("конкатенація:", t4(a4, b4));
console.log("---");