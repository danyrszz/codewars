
/*
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

var moveZeros = function (arr) {
    let arranged=[];
    let zeros=0;
    arr.map((el,i)=>{if (el != 0) return arranged.push(el); zeros++});
    for(let i=0;i<zeros;i++){ arranged.push(0) }
    return arranged;
  }

