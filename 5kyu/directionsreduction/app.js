/*
https://www.codewars.com/kata/550f22f4d758534c1100025a
*/ 

function dirReduc(arr){
    let reduced =[];
    arr.map((el,i) => {
      if(typeof reduced=="undefined") return reduced.push(el);
      if(el == "NORTH"){
        if (reduced[reduced.length-1]=="SOUTH") reduced.pop(); else return reduced.push(el);
      }
      if(el == "SOUTH"){
        if (reduced[reduced.length-1]=="NORTH") reduced.pop(); else return reduced.push(el);
      }
      if(el == "EAST"){
        if (reduced[reduced.length-1]=="WEST") reduced.pop(); else return reduced.push(el);
      }
      if(el == "WEST"){
        if (reduced[reduced.length-1]=="EAST") reduced.pop(); else return reduced.push(el);
      }
    })
    return reduced;
  }