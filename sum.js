

export function capitalize(word) {
    let firstLetter = word[0].toUpperCase() + word.slice(1);
    return firstLetter
   
  }
  

export function reverseString(word){
    return word.split('').reverse().join('');
}

const calculator = {
    add : function(a, b){
        return a + b;
    },

    subtract : function(a, b){
        return a - b;
    },

    divide : function(a, b){
        return a / b;
    },

    multiply : function(a, b){
        return a * b;
    }

}

export function caesarCipher(string, movement=3){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lengthWord = string.length;
    let newWord = '';

    for (let i = 0; i < lengthWord; i++){

        if ( /[^a-zA-Z0-9]/.test(string[i])){
            newWord += string[i];

        } else if  (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()){
            const upperAlphabet = alphabet.toUpperCase();
            let letterIndex = upperAlphabet.indexOf(string[i]);
            
            if (letterIndex + movement >= upperAlphabet.length){
                letterIndex = Math.abs(upperAlphabet.length - (letterIndex + movement));
                newWord += alphabet[letterIndex];
            } else {
                newWord += upperAlphabet[letterIndex + movement];
            }
        } else if (string[i] === string[i].toLowerCase() && string[i] !== string[i].toUpperCase()){
            let letterIndex = alphabet.indexOf(string[i]);

            if (letterIndex + movement >= alphabet.length){
                letterIndex = Math.abs(alphabet.length - (letterIndex + movement));
                newWord += alphabet[letterIndex];
            } else {
                newWord += alphabet[letterIndex + movement];
            }
        
        }
       
    }

    return newWord;
}

export function analyzeArray(array){
    let average = array.reduce((acc, num) => acc + num, 0) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length
    return {
        "average": average,
        "min": min,
        "max": max,
        "length": length
    }
}


 module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }; 
