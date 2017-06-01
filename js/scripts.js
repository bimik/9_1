// scripts.js
    
function getTriangleArea(a, h) {
    if (a <= 0) { //dodać jeszcze wartość H na else if
        return "Nieprawidłowe dane";
    } else {
        return a * h / 2;
    }

}
    
console.log(getTriangleArea(0, 6));