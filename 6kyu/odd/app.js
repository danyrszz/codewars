/*
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {

  let timesRepeated=[];
  for(let i=0;i<A.length;i++){
    if(exist(A[i])){}
    else{ timesRepeated.push({n:A[i], repeats:1});}
  }

  function exist(element){
    for(j=0;j<timesRepeated.length;j++){
      if(element == timesRepeated[j].n){
        timesRepeated[j].repeats++;
        return true;
      }
    }
    return false;
  }
  console.log(timesRepeated)
  
  return timesRepeated.find(el=> el.repeats%2!=0).n
}