//7kyu
//typeOfTriangle(2,2,1) --> "Isosceles"


var typeOfTriangle = function (a,b,c) {
    if(typeof a != "number") a=null;
    if(typeof b != "number") b=null;
    if(typeof c != "number") c=null;
    if(typeof (a && b && c)!="number") return "Not a valid triangle";
    if((a+b)<=c || (a+c)<= b || (b+c) <=a) return "Not a valid triangle";
    if(a==b && b==c && a==c) return "Equilateral"
    if(a!=b && b!=c && a!=c) return "Scalene"
    return "Isosceles"    
}
