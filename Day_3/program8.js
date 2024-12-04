/*write a js to print odd digits alphabets where alphabet start from 0*/
for (let i = 1; i <= 26; i++) {
    if (i % 2 !== 0) {
        
        let alphabet = String.fromCharCode(64 + i);
        console.log(alphabet); 
    }
}
