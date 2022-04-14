//"the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let arr = str.split('')
    let mod=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!="-"&&arr[i]!="_"){
            mod.push(arr[i]);
        }
        if(arr[i]=="-"||arr[i]=="_"){
            mod.push(arr[i+1].toUpperCase());
            i++; 
        } 
    }
    return mod.join('');
}