/*For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*/

function narcissistic(value) {
    // Code me to return true or false
    let digits = value.toString().split('');
    let result=0;
    for(let i=0;i<digits.length;i++){
        result +=Math.pow(parseInt(digits[i]), digits.length);
    }
    if (result == value) return true
    else return false; 
}