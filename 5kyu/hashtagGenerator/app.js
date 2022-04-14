/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

https://www.codewars.com/kata/52449b062fb80683ec000024
*/

function generateHashtag (str) {
  if(str.trim() === "" ){
    return false;
  }else{
    let temp = "#"+str
    .toLowerCase().trim().split(' ').filter(e=>(e!="")).map(e=>e[0].toUpperCase() + e.slice(1)).toString().replace(/,/g,'');
    if(temp.length <= 140) return temp;
    else return false;
  }
}