//https://www.codewars.com/kata/529bf0e9bdf7657179000008

function doneOrNot(board){
  let temp = [];

  function checkHorizontal (board) {
    for(i=0;i<9;i++){
      temp = [];
      for(let j=0; j<9; j++){
        if (temp.includes(board[i][j])) return false; else temp.push(board[i][j]);
      }
    }
    return true
  }

  function checkVertical (board) {
    let aux = 0;
    while(aux<9){
      temp=[]
      for(i=0;i<9;i++){
        if (temp.includes(board[i][aux])) return false; else temp.push(board[i][aux]);
      }
      aux++
    }
    return true;
  }

  function checkColSqr(col, row){
      temp = [];     
      endCol = col+3;
      endRow = row+3
      for(i=row;i<endRow;i++){
        for(j=col;j<endCol;j++){
          if (temp.includes(board[i][j])) return false; else temp.push(board[i][j])
        }
      }
      return true;
  }
  
  const checkSquares = () =>{
    if(
    checkColSqr(0,0)&&
    checkColSqr(0,3)&&
    checkColSqr(0,6)&&
    checkColSqr(3,0)&&
    checkColSqr(3,3)&&
    checkColSqr(3,6)&&
    checkColSqr(6,0)&&
    checkColSqr(6,3)&&
    checkColSqr(6,6)
    ) return true; else return false;
  }

  if(checkHorizontal(board)&&checkVertical(board)&&checkSquares()) return true; else return false;
}


  console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))

/*this finds a repeated element on an array. If exists returns true if not returns false.
const search = (arr) => {
    let temp=[];
    for(let i=0; i<arr.length; i++){
        if (temp.includes(arr[i])) return true; else temp.push(arr[i])
    }
    return false
}
*/

