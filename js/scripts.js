// scripts.js
    
function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "Nieprawidłowe dane";
    } else {
        return a * h / 2;
    }

}
    
console.log(getTriangleArea(0, 6));
console.log(getTriangleArea(12, 6));
console.log(getTriangleArea(5, 6));