/*
6kyu
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
    let converted = [];
    let result="";
    word= word.toLowerCase();
    for (i=0; i<word.length; i++){
        for(j=0;j<word.length;j++){
            if(i!=j){
                if(word[i]==word[j]){
                    converted[i] = ")"
                    j=word.length
                }else{
                    converted[i] = "("
                }
            }
        }
    }
    for (i=0;i<converted.length;i++){
        result+= converted[i]
    }
    return result
}
