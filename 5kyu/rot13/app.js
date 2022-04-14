//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

function rot13(message){
    let codedMessage = "";
    message.split('').map(element => {
        codedMessage += writeCharacter(element);
    })
    return codedMessage;
  }

  function writeCharacter (character){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if(/[a-z]/.test(character)){

        let count=0;
        i = alphabet.indexOf(character);
        while(count<13){
            if (i==alphabet.length-1) i=-1;
            i++; count++;
        }
        return alphabet[i];

    }else if(/[A-Z]/.test(character)){

        let count=0;
        i = upperAlphabet.indexOf(character);
        while(count<13){
            if (i==upperAlphabet.length-1) i=-1;
            i++; count++;
        }
        return upperAlphabet[i];
    }
    else return character;
  }

