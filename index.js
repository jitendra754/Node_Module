/*var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area: (x,y) =>(x*y)

}*/

var rect=require("./rectangle");

function solveRect(l,b){
console.log("Solfing for Rectangle with l="+l+" and b="+b);

if(l <=0 || b <= 0){
    console.log("Either length and Breadth must be grater than zero");

}else{
    console.log("Area is "+rect.area(l,b));
    console.log("Perimeter is "+rect.perimeter(l,b));
}
}

solveRect(5,10);
solveRect(0,5);
