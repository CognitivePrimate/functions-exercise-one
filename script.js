
function getAreaOfCirle(r) {
    if (r >= 0) {
       return Math.PI * (r * r);
    }
}


function getCircumferenceOfCircle(r) {
    return 2 * Math.PI * r;
}




function getAreaOfSquare(side) {
     return side * side
}



function getAreaOfTriangle(base, height) {
    return (base * height) /2;
}



console.log(getAreaOfCirle(5));
console.log(getCircumferenceOfCircle(5));
console.log(getAreaOfSquare(5));
console.log(getAreaOfTriangle(4, 8));
