/*1.Write a program that removes duplicate values from an array of numbers.
For example, [1, 2, 2, 3, 4, 4, 5] should become [1, 2, 3, 4, 5].

Question 1: Write a JavaScript program that takes an array of numbers, resoves duplicates,
and returns a new array with unique values only without using inbuilt function.*/
function removesDuplicates(array) {
    let uniquearray = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniquearray.includes(array[i])) {
            uniquearray.push(array[i]); 
        }
    }
    return uniquearray;
}

let inputArray = [1, 2, 2, 3, 4, 4, 5];
console.log(removesDuplicates(inputArray));