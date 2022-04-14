//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)

function isIsogram(str){
    arr= str.toLowerCase().split('')
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]) return false
        }
    }
    return true
  }