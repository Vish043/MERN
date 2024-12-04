/*uppercase to lowercase*/
function convertCase(char) {
    
    if (char >= 'A' && char <= 'Z') {
    
        return char.toLowerCase();
    }
   
    else if (char >= 'a' && char <= 'z') {
        return char.toUpperCase();
    } else {
        return 'Please enter a valid alphabet letter.';
    }
}

let inputChar = 'a'; 
let result = convertCase(inputChar);
console.log(`Converted character: ${result}`);
